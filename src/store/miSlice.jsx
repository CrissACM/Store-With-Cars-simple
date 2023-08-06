import { createSlice } from '@reduxjs/toolkit';

export const originSlice = createSlice({
  name: 'myValue',
  initialState: {
    category: '',
    myCart: [],
  },
  reducers: {
    saveCategory: (state, action) => {
      state.category = action.payload;
    },
    buy: (state, action) => {
      state.myCart = [...state.myCart, action.payload];
    },
    remove: (state, action) => {
      state.myCart = state.myCart.filter(
        item => item.product !== action.payload
      );
    },
  },
});

export const { saveCategory, buy, remove } = originSlice.actions;

export default originSlice.reducer;
