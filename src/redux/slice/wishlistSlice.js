import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: [],
    reducers: {
        addToWishlist: (state, action) => {
            const existingProduct = state.find(item => item.id == action.payload.id)
            if (existingProduct){
                alert("Item already added to wishlist")
            }else{
                state.push(action.payload)
            }
        },
        removeFromWishlist: (state,action)=>{
            return state.filter(item=>item.id!==action.payload.id)
        }
    }
})

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;