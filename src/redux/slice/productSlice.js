import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Action return promise
export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    // const response = await axios.get("https://fakestoreapi.com/products");
    const response = await axios.get("https://dummyjson.com/products");
    // console.log(response.data.products);
    sessionStorage.setItem("allProducts",JSON.stringify(response.data.products))
    return response.data.products;
})

const productSlice = createSlice({
    name: "products",
    initialState: {
        allProducts: [],
        dummyProduct: [],
        loading:false,
        errorMsg:""
    },
    reducers: {
        searchProduct : (state,actionbyHeader) => {
            state.allProducts = state.dummyProduct.filter(item => item.title.toLowerCase().includes(actionbyHeader.payload))
        }
        
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled,(state,apiResult)=>{
            state.allProducts = apiResult.payload;
            state.dummyProduct = apiResult.payload
            state.loading = false;
            state.errorMsg = "";
        }),
        builder.addCase(fetchProducts.pending,(state)=>{
            state.loading = true;
            state.errorMsg = "";
            state.allProducts = [];
            state.dummyProduct = [];
        }),
        builder.addCase(fetchProducts.rejected,(state,action)=>{
            state.loading = false;
            state.errorMsg = "API call failed";
            state.allProducts = [];
            state.dummyProduct = [];
        })
    }
})

export const { searchProduct } = productSlice.actions 
export default productSlice.reducer;