import { configureStore } from "@reduxjs/toolkit";
import products from './products';
import cart from './cart';
import user from './user';


const store = configureStore({
  reducer: {
    products,
    cart,
    user,
  },
})

export default store;