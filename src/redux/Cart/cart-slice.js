import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialstate: [],

  reducers: {},
});

// const { addProduct } = cartSlice.actions;

export default cartSlice.reducer;
