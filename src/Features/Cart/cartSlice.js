import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
const initialState = {
    cartItems : cartItems,
    amount : 5,
    total : 0,
    isLoading : true
}

//setting up a slice for cart feature

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers :{
        clearCart : (state) => {
            state.cartItems = []
        },
        removeItem : (state,action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((x)=>x.id !== itemId)
        },
        increase : (state,{payload}) => {
            const cardItem = state.cartItems.find((x)=>x.id  === payload.id)
            cardItem.amount = cardItem.amount + 1;
        },
        decrease : (state,{payload}) => {
            const cardItem = state.cartItems.find((y)=>y.id === payload.id)
            cardItem.amount = cardItem.amount - 1
        },
        calculateTotal : (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((x)=>{
                total += x.amount * x.price;
                amount += x.amount;
            })
            state.amount = amount;
            state.total = total;
        }
        
    }
})
export const {clearCart,removeItem,increase,decrease,calculateTotal} = cartSlice.actions;
//if we log this slice by importing "features/cart/cartslice" into store.js, we can see an object with reducer in it.
// So we have to export it to store.

// console.log(cartSlice);

export default cartSlice.reducer

// console.log(cartSlice)
