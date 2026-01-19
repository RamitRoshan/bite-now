import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cartSlice";

/*we will use a fn, which is known as configure store to create 
our own store this configureStore comes from redux toolkit */

const appStore = configureStore({
    //big reducers contains small cartReducers
    reducer: {
        cart : cartReducer,
    },
});

export default appStore;