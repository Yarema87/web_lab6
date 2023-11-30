import { configureStore } from "@reduxjs/toolkit";
import carAmountsReducer from "./reducers";

const store = configureStore({
    reducer: carAmountsReducer,
  });
  
  export default store;