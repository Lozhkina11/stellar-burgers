import {
  getUserOrders,
  userHistorysReducer,
  initialStateHistory
} from './userHistory';

const orders = [
  {
    _id: '6691032b119d45001b4f8481',
    ingredients: ['643d69a5c3f7b9001cfa093f', '643d69a5c3f7b9001cfa093c'],
    status: 'done',
    name: 'Краторный бессмертный бургер',
    createdAt: '2024-07-12T10:19:23.922Z',
    updatedAt: '2024-07-12T10:19:24.397Z',
    number: 45552
  }
];

describe('Test user history orders slice', () => {
  it('test get user history orders', () => {
    const state = userHistorysReducer(initialStateHistory, {
      type: getUserOrders.fulfilled.type,
      payload: orders
    });
    expect(state).toEqual({ ...initialStateHistory, orders });
  });
});
