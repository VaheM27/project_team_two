import { configureStore } from "@reduxjs/toolkit";
import { addCartReducer } from "./slice/addCart/addCartSlice";

const store = configureStore({
    reducer : {
        products : addCartReducer,
    }
})


export default store