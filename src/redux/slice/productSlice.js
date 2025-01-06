import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Action return promise
export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    // const response = await axios.get("https://fakestoreapi.com/products");
    const response = await axios.get("https://dummyjson.com/products");
    console.log(response.data.products);
    return response.data.products;
})

const productSlice = createSlice({
    name: "products",
    initialState: {
        allProducts: [],
        loading:false,
        errorMsg:""
    },
    reducers: {
        
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled,(state,apiResult)=>{
            state.allProducts = apiResult.payload;
            state.loading = false;
            state.errorMsg = "";
        }),
        builder.addCase(fetchProducts.pending,(state)=>{
            state.loading = true;
            state.errorMsg = "";
            state.allProducts = [];
        }),
        builder.addCase(fetchProducts.rejected,(state,action)=>{
            state.loading = false;
            state.errorMsg = "API call failed";
            state.allProducts = [];
        })
    }
})

export default productSlice.reducer;