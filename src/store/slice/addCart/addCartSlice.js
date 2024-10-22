import { createSlice } from "@reduxjs/toolkit";
import { fetchProductData } from "./API";



const addCartSlice = createSlice({
    name: "products",
    initialState: {
        data: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProductData.pending, () => {
            console.log("PENDING")
        }).addCase(fetchProductData.fulfilled, (state, action) => {
            console.log("data is here")
            console.log(action.payload.data)
            state.data = [...state.data,action.payload.data]
        }).addCase(fetchProductData.rejected, ()=>{
            throw new Error("Rejected")
        })
    }
})


export const addCartReducer = addCartSlice.reducer