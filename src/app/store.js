import { configureStore } from "@reduxjs/toolkit";
import { arrivalApi } from "../services/arrivalApi";

export const store = configureStore({
  reducer: {
    [arrivalApi.reducerPath]: arrivalApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(arrivalApi.middleware)
});