import { getOrder, initialStateOrder, orderReducer } from './order';

const orders = [
  {
    _id: '66ae4a7d119d45001b4fd5d8',
    ingredients: [
      '643d69a5c3f7b9001cfa093d',
      '643d69a5c3f7b9001cfa0948',
      '643d69a5c3f7b9001cfa093f',
      '643d69a5c3f7b9001cfa094a',
      '643d69a5c3f7b9001cfa0941',
      '643d69a5c3f7b9001cfa0949',
      '643d69a5c3f7b9001cfa093d'
    ],
    status: 'done',
    name: 'Флюоресцентный астероидный бессмертный альфа-сахаридный экзо-плантаго био-марсианский бургер',
    createdAt: '2024-08-03T15:19:25.958Z',
    updatedAt: '2024-08-03T15:19:26.498Z',
    number: 48341
  }
];

describe('Test order slice', () => {
  it('test get order by number', () => {
    const state = orderReducer(initialStateOrder, {
      type: getOrder.fulfilled.type,
      payload: { orders }
    });
    expect(state).toEqual({ ...initialStateOrder, order: orders[0] });
  });

  it('test get order by number rejected', () => {
    const state = orderReducer(initialStateOrder, {
      type: getOrder.rejected.type
    });
    expect(state).toEqual({ ...initialStateOrder, isOrderLoading: false });
  });

  it('test get order by number pending', () => {
    const state = orderReducer(initialStateOrder, {
      type: getOrder.pending.type
    });
    expect(state).toEqual({ ...initialStateOrder, isOrderLoading: true });
  });
});
