import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    error: '',
    loading: 'idle',
    searchQuery: '',
    offset: 0
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
    setSearchQuery: (state, action) => {
        state.searchQuery = action.payload
    },
    setOffset: (state, action) => {
        state.offset = action.payload
    },
    productsError: (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.error = action.payload
      }
    }
  }
});

export const { productsLoading, productsReceived, productsError, setSearchQuery, setOffset } = productsSlice.actions;

export default productsSlice.reducer;
