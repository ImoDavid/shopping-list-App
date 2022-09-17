import { configureStore } from "@reduxjs/toolkit";
import shopListReducer from './features/shoppingList/shoppingListSlice';
import modalReducer from './features/modal/modalSlice';


export const store = configureStore({
    reducer:{
        shopList: shopListReducer,
        modal: modalReducer,
        
    },
});