import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
export const getAllProduct = createAsyncThunk(
  "product/getAll",
  async (values: any, thunkApi) => {
    try {
      axios.defaults.withCredentials = true;
      const response = await axios.get(
        "https://sneakerbe-app-api.onrender.com/api/v1/products"
      );

      return (await response).data.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
  }
);
