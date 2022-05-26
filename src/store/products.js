import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    loading: false,
    data: []
  },
  reducers: {
    addProduct(state, action) {

    }
  }
})

export const { addProduct}  = productsSlice.actions;

export default productsSlice.reducer;