import { configureStore, createReducer } from '@reduxjs/toolkit';

import cartReducer from './Cart/cart-slice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
