import { orderBurgerApi } from '@api';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TOrder } from '@utils-types';

type TBurgerState = {
  ingredients: string[];
  order: TOrder | null;
  isOrderBurgerLoading: boolean;
};

const initialState: TBurgerState = {
  ingredients: [], // @todo: переименовать
  order: null, // @todo: переименовать
  isOrderBurgerLoading: false // @todo: переименовать
};

export const sendOrderBurger = createAsyncThunk(
  // @todo: sendOrderBurger переименовать
  'orders/orderBurger',
  orderBurgerApi
);

const orderBurger = createSlice({
  name: 'orderBurger',
  initialState: initialState,
  reducers: {
    resetOrder: (state) => {
      state.order = null;
    },
    resetIngredients: (state) => {
      state.ingredients = [];
    }
  },
  selectors: {
    selectOrderBurger: (state) => state.order,
    selectOrderBurgerIngredients: (state) => state.ingredients,
    selectOrderBurgerIsLoading: (state) => state.isOrderBurgerLoading
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendOrderBurger.fulfilled, (state, action) => {
        state.order = action.payload.order;
        state.ingredients = action.payload.order.ingredients;
        state.isOrderBurgerLoading = false;
      })
      .addCase(sendOrderBurger.rejected, (state, action) => {
        state.isOrderBurgerLoading = false;
      })
      .addCase(sendOrderBurger.pending, (state, action) => {
        state.isOrderBurgerLoading = true;
      });
  }
});

export const orderBurgerReducer = orderBurger.reducer;
export const {
  selectOrderBurgerIsLoading,
  selectOrderBurgerIngredients,
  selectOrderBurger
} = orderBurger.selectors;
export const { resetOrder, resetIngredients } = orderBurger.actions;
