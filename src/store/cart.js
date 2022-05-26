import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    loading: false,
    data: []
  },
  reducers: {
    addProduct(state, action) {

    }
  }
})

export const { addProduct }  = cartSlice.actions;

export default cartSlice.reducer;