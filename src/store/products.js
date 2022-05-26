import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    loading: false,
    data: [],
    colors: [],
    brands: [],
  },
  reducers: {
    addAllProducts(state, action) {
      state.data = action.payload;
    },
    addColors(state, action) {
      state.colors = action.payload;
    }
  }
})

export const { addAllProducts, addColors }  = productsSlice.actions;

export default productsSlice.reducer;