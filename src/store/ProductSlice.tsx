import { createSlice } from "@reduxjs/toolkit";
import { getAllProduct } from "./FetchApi";

const initialState = {
  product: null,
};

export const ProductSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAllProduct.fulfilled, (state: any, actions) => {
      state.product = actions.payload.allproducts;
    });
  },
});

export default ProductSlice.reducer;
