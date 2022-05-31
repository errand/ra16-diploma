import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    error: '',
    loading: 'idle',
    searchQuery: ''
  },
  reducers: {
    productsLoading: (state, action) => {
      if (state.loading === 'idle') {
        state.loading = 'pending'
      }
    },
    productsReceived: (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.data = action.payload
      }
    },
    productsError: (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.error = action.payload
      }
    }
  }
});

export const { productsLoading, productsReceived, productsError } = productsSlice.actions;

export default productsSlice.reducer;
