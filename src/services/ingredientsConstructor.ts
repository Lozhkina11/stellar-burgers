import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { TConstructorIngredient, TIngredient } from '@utils-types';

type TInitialState = {
  bun: TConstructorIngredient | null;
  selectedIngredients: TConstructorIngredient[];
};

const initialState: TInitialState = {
  bun: null,
  selectedIngredients: []
};

const constructorSlice = createSlice({
  name: 'ingredientsConstructor',
  initialState: initialState,
  selectors: {
    selectSelectedIngredients: (state) => state.selectedIngredients,
    selectSelectedBun: (state) => state.bun
  },
  reducers: {
    addSelectedIngredient: {
      reducer: (state, action: PayloadAction<TConstructorIngredient>) => {
        state.selectedIngredients = [
          ...state.selectedIngredients,
          action.payload
        ];
      },
      prepare: (ingredient: TIngredient) => {
        const id = nanoid();

        return {
          payload: {
            ...ingredient,
            id
          }
        };
      }
    },
    addBun: (state, action) => {
      state.bun = action.payload;
    },
    removeSelectedIngredient: (
      state,
      action: PayloadAction<TConstructorIngredient>
    ) => {
      state.selectedIngredients = state.selectedIngredients.filter(
        (item) => item.id !== action.payload.id
      );
    },
    resetConstructor: (state) => {
      state.bun = null;
      state.selectedIngredients = [];
    },
    moveUpSelectedIngredient: (
      state,
      action: PayloadAction<TConstructorIngredient>
    ) => {
      const index = state.selectedIngredients.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index > 0) {
        const temp = state.selectedIngredients[index - 1];
        state.selectedIngredients[index - 1] = action.payload;
        state.selectedIngredients[index] = temp;
      }
    },
    moveDownSelectedIngredient: (
      state,
      action: PayloadAction<TConstructorIngredient>
    ) => {
      const index = state.selectedIngredients.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index < state.selectedIngredients.length - 1) {
        const temp = state.selectedIngredients[index + 1];
        state.selectedIngredients[index + 1] = action.payload;
        state.selectedIngredients[index] = temp;
      }
    }
  }
});

export const constructorReducer = constructorSlice.reducer;
export const {
  addBun,
  addSelectedIngredient,
  removeSelectedIngredient,
  resetConstructor,
  moveUpSelectedIngredient,
  moveDownSelectedIngredient
} = constructorSlice.actions;

export const { selectSelectedIngredients, selectSelectedBun } =
  constructorSlice.selectors;
