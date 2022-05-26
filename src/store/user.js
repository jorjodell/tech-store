import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    data: null,
  },
  reducers: {
    saveUser(state, action) {
      state.data = action.payload;
    }
  }
})

export const { saveUser } = userSlice.actions;

export default userSlice.reducer;