import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import categoriesReducer from "./categoriesSlice"

export default configureStore({
  reducer:{
    products: productsReducer,
    categories: categoriesReducer,
  }
});
