import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice";

export const store = configureStore({
  reducer: {
    product: ProductSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
