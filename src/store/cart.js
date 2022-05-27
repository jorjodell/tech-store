import { createSlice, createEntityAdapter, createDraftSafeSelector } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const cartAdapter = createEntityAdapter();

export const cartSelectors = cartAdapter.getSelectors((state) => state.cart);

const cartSlice = createSlice({
  name: 'cart',
  initialState: cartAdapter.getInitialState({
    loading: false,
  }),
  reducers: {
    addProduct(state, action) {
      const pushedProduct = { ...action.payload };
      const product = state.entities[pushedProduct?.id];
      if (product) {
        const copyProduct = { ...product };
        copyProduct.quantity++;
        cartAdapter.upsertOne(state, copyProduct);
      } else {
        pushedProduct.quantity = 1;
        cartAdapter.addOne(state, pushedProduct)
      }
    },
    removeProduct: cartAdapter.removeOne,
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;
