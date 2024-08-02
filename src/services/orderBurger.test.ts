import { describe } from 'node:test';
import {
  createOrderBurger,
  resetOrder,
  resetIngredients,
  orderBurgerReducer,
  initialStateOrderBurger
} from './orderBurger';

const newState = {
  ingredients: [
    '643d69a5c3f7b9001cfa093c',
    '643d69a5c3f7b9001cfa0943',
    '643d69a5c3f7b9001cfa0947',
    '643d69a5c3f7b9001cfa093c'
  ],
  order: {
    _id: '66963cb5119d45001b4f9288',
    ingredients: [
      '643d69a5c3f7b9001cfa093c',
      '643d69a5c3f7b9001cfa0943',
      '643d69a5c3f7b9001cfa0947',
      '643d69a5c3f7b9001cfa093c'
    ],
    status: 'done',
    name: 'Краторный space фалленианский бургер',
    createdAt: '2024-07-16T09:26:13.956Z',
    updatedAt: '2024-07-16T09:26:14.406Z',
    number: 45940
  },
  isOrderBurgerLoading: false
};

describe('Test order-burger slice', () => {
  it('test reset order', () => {
    const state = orderBurgerReducer(newState, resetOrder());
    expect(state).toEqual({ ...newState, order: null });
  });

  it('test reset ingredients', () => {
    const state = orderBurgerReducer(newState, resetIngredients());
    expect(state).toEqual({ ...newState, ingredients: [] });
  });

  it('test send order', () => {
    const state = orderBurgerReducer(initialStateOrderBurger, {
      type: createOrderBurger.fulfilled.type,
      payload: newState
    });

    expect(state).toEqual(newState);
  });

  it('test send order rejected', () => {
    const state = orderBurgerReducer(newState, {
      type: createOrderBurger.rejected.type
    });

    expect(state).toEqual({ ...newState, isOrderBurgerLoading: false });
  });

  it('test send order pending', () => {
    const state = orderBurgerReducer(newState, {
      type: createOrderBurger.pending.type
    });

    expect(state).toEqual({ ...newState, isOrderBurgerLoading: true });
  });
});
