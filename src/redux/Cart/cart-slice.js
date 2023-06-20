import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],

  reducers: {
    addProduct: (state, action) => {
      //   console.log(action.payload.prices);
      const total = action.payload.prices;
      return [...state, { ...action.payload, amount: 1, total: total }];
    },
    deleteProduct: (state, action) => {
      return state.filter(({ id }) => id !== action.payload);
    },

    incrementAmount: (state, action) => {
      const total = action.payload.prices;
      return state.map(product =>
        product.id === action.payload.id
          ? {
              ...product,
              amount: product.amount + 1,
              total: total * (product.amount + 1),
            }
          : product
      );
    },

    decrementAmount: (state, action) => {
      const total = action.payload.prices;
      return state.map(product =>
        product.id === action.payload.id
          ? {
              ...product,
              amount: product.amount - 1,
              total: total * (product.amount - 1),
            }
          : product
      );
    },
  },
});

export const { addProduct, deleteProduct, incrementAmount, decrementAmount } =
  cartSlice.actions;

export default cartSlice.reducer;
