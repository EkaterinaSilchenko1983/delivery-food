import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],

  reducers: {
    addProduct: (state, action) => {
      return [...state, action.payload];
    },
    deleteProduct: (state, action) => {
      return state.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { addProduct, deleteProduct } = cartSlice.actions;

export default cartSlice.reducer;
