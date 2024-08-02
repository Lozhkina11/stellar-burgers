
import store from './store';
import { initialStateIngredients } from './ingredients';
import { initialStateOrderBurger } from './orderBurger';
import { initialStateUser } from './user';
import { initialStateHistory } from './userHistory';
import { initialStateOrder } from './order';
import { initialStateIngredientsConstructor } from './ingredientsConstructor';
import { initialState } from './feed';

describe('должен возвращать начальное состояние для всех редьюсеров', () => {
  it('должен возвращать начальное состояние для всех редьюсеров', () => {
    expect(store.getState()).toEqual({
      ingredients: initialStateIngredients,
      ingredientsConstructor: initialStateIngredientsConstructor,
      orderBurger: initialStateOrderBurger,
      order: initialStateOrder,
      user: initialStateUser,
      userHistory: initialStateHistory,
      feed: initialState
    });
  });
});
