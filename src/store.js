import { configureStore } from "@reduxjs/toolkit";

// importing that reducer with our desired name

import cartReducer from "./Features/Cart/cartSlice"
import modalReducer from "./Features/Modal/modalSlice"
//passing that reducer to reducer as an object with desired key in store.(with reducer we can mutate state) 

const store = configureStore({
    reducer : {
        cart :cartReducer,
        modal : modalReducer
    }
})

export default store;