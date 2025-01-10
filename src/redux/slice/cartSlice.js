import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const existingProduct = state.find(item => item.id == action.payload.id)
            if (existingProduct) {
                existingProduct.quantity++
                existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
                existingProduct.totalPrice = Math.round(existingProduct.totalPrice * 100) / 100
                const remainingProducts = state.filter(item=>item.id != existingProduct.id)
                state = [...remainingProducts,existingProduct]
            } else {
                state.push({
                    ...action.payload,
                    quantity: 1,
                    totalPrice: action.payload.price
                })
            }
        },

        removeFromCart: (state, action) => {
            return state.filter(item => item.id !== action.payload.id)
        },

        decreaseQuantity: (state, action) => {
            const existingProduct = state.find(item => item.id == action.payload.id)
            existingProduct.quantity--
            existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
            existingProduct.totalPrice = Math.round(existingProduct.totalPrice * 100) / 100
            const remainingProducts = state.filter(item=>item.id != existingProduct.id)
            state = [...remainingProducts,existingProduct]
        },
        emptyCart: (state) => {
            return state = []
        }
    }
})

export const { addToCart, removeFromCart, decreaseQuantity,emptyCart } = cartSlice.actions;
export default cartSlice.reducer;