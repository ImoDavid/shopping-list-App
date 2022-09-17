import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isOpen: false,
    isShowMe:true
};


const modalSlice = createSlice ({
    name:'modal',
    initialState,
    reducers:{
        openModal:(state, action)=>{
            state.isOpen=true;
        },
        closeModal:(state, action)=>{
            state.isOpen=false;
        },
        showMe:(state, action)=>{
            state.isShowMe= action.payload;
        },
 
        
    },
});


export const{ openModal, closeModal,showMe } = modalSlice.actions;

export default modalSlice.reducer;

















