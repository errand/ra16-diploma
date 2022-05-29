import { createSlice } from "@reduxjs/toolkit";

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    data: [],
    error: '',
    loading: 'idle',
  },
  reducers: {
    categoriesLoading: (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending'
      }
    },
    categoriesReceived: (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.services = action.payload
      }
    },
    categoriesError: (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.goodToGo = false
        state.error = action.payload
      }
    }
  }
});

export const { categoriesLoading, categoriesReceived, categoriesError } = categoriesSlice.actions;

export default categoriesSlice.reducer;
