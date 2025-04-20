import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.unshift(action.payload)
        },
        remove:(state)=>{
            state.items.pop();
        },
        emptyCart:(state)=>{
            state.items.length=0;
        }
    }
})
export const {addItem,remove,emptyCart}=cartSlice.actions;
export default cartSlice.reducer