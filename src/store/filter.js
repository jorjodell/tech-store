import { createSlice } from "@reduxjs/toolkit";

const fliterSlice = createSlice({
  name: 'fliter',
  initialState: {
    loading: false,
    color: '',
    priceRange: [null, null],
  },
  reducers: {}
})

export default fliterSlice.reducer;