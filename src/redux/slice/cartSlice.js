import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const existingProduct = state.find(item => item.id == action.payload.id)
            if(existingProduct){
                existingProduct.quantity += 1
                existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
                existingProduct.totalPrice = Math.round(existingProduct.totalPrice * 100) / 100
            }else{
                state.push({
                    ...action.payload,
                    quantity : 1,
                    totalPrice : action.payload.price
                })
            }
        },

        removeFromCart: (state,action) => {
            return state.filter(item=>item.id!==action.payload.id)
        },

        decreaseQuantity: (state,action) => {
            const existingProduct = state.find(item => item.id == action.payload.id)
            existingProduct.quantity -= 1
            if(existingProduct.quantity == 0){
                console.log((existingProduct.quantity));
                return state.filter(item=>item.id!==action.payload.id)
                // removeFromCart(existingProduct)
            }
            else{
                existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
            }
            // existingProduct.quantity == 0 ?  
            //     state.filter(item=>item.id!==action.payload.id) 
            //     : 
            //     existingProduct.totalPrice = existingProduct.quantity * existingProduct.price;
            existingProduct.totalPrice = Math.round(existingProduct.totalPrice * 100) / 100
        }
    }
})

export const { addToCart,removeFromCart,decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;