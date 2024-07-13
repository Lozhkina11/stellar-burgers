import { getOrderByNumberApi } from '@api';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TOrder } from '@utils-types';

type TInitialState = {
  order: TOrder | null;
  isOrderLoading: boolean;
};

const initialState: TInitialState = {
  order: null,
  isOrderLoading: false
};

export const getOrderByNumber = createAsyncThunk(
  'order/getOrderByNumber',
  getOrderByNumberApi
);

const order = createSlice({
  name: 'order',
  initialState: initialState,
  reducers: {},
  selectors: {
    selectOrder: (state) => state.order,
    selectIsLoading: (state) => state.isOrderLoading
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrderByNumber.fulfilled, (state, action) => {
        state.order = action.payload.orders[0];
        state.isOrderLoading = false;
      })
      .addCase(getOrderByNumber.rejected, (state, action) => {
        state.isOrderLoading = false;
      })
      .addCase(getOrderByNumber.pending, (state, action) => {
        state.isOrderLoading = true;
      });
  }
});

export const orderReducer = order.reducer;
export const { selectOrder, selectIsLoading } = order.selectors;
