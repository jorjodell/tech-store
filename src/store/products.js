import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../api';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { dispatch }) => {
    const [resProducts, resColors] = await Promise.all([
      axios.get(`/products`),
      axios.get('/colors'),
    ]);
    dispatch(addAllProducts(resProducts.data));
    dispatch(addColors(resColors.data));
  })

export const fetchProductsByFilter = createAsyncThunk(
  'products/fetchProductsByFilter',
  async (color, { dispatch }) => {
    const { data } = await axios.get(`/products`, {
      params: { color },
    });
    dispatch(addAllProducts(data))
  },
)

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