import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    error: '',
    loading: 'idle',
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
        state.services = action.payload
      }
    },
    productsError: (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.goodToGo = false
        state.error = action.payload
      }
    }
  }
});

export const { servicesLoading, servicesReceived, servicesError } = productsSlice.actions;

export default productsSlice.reducer;
