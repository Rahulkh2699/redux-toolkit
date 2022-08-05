import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";
import counterReducer from "./counterSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    counter: counterReducer,
  },
});

export default store;
