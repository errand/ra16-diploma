import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    error: '',
    loading: 'idle',
    searchQuery: '',
    next: []
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
    productsAppend: (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.data = [...state.data, ...action.payload]
      }
    },
    setSearchQuery: (state, action) => {
        state.searchQuery = action.payload
    },
    setOffset: (state, action) => {
        state.next = action.payload
    },
    productsError: (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.error = action.payload
      }
    },
  }
});

export const { productsLoading, productsReceived, productsError, setSearchQuery, setOffset, productsAppend } = productsSlice.actions;

export default productsSlice.reducer;
