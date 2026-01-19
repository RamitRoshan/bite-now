import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        //cart items, initially I am giving it as empty array
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            //items is a array and I will push the action.payload inside it, also updating the state
            state.items.push(action.payload);
        },
        //no need of actions here
        removeItem: (state) => {
            //removing one items from the end
            state.items.pop();
        },
        //reducer functions
        clearCart: (state) => {
            //this will make my item empty again,
            //if they're 10 items in the cart then it will make it 0
            state.items.length = 0; //length 0 makes state as empty array.
        },
    },
});

//exporting 2 things from here, actions & reducers

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;