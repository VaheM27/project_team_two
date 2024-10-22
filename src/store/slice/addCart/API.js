import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductData = createAsyncThunk("products/fetchProductData", async (id) => {
    const result = await axios(`http://localhost:3000/images/${id}`)
    const json = await result
    return json
})