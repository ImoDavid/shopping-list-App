import { createSlice } from '@reduxjs/toolkit';
//import shopItems from '../../shopItems'


const initialState = {
  shopItems: [],
  isLoading: true,
  showForm:false
};

const shopListSlice = createSlice({
  name: 'shopList',
  initialState,
  reducers:{
    clearList: (state) => {
        state.shopItems = [];
      },
    addItem:(state,{payload}) => {
      state.shopItems.unshift(payload);
    },
    removeItem:(state, action)=> {
      const itemId = action.payload;
      state.shopItems = state.shopItems.filter((item) => 
          item.id !== itemId);
    },
    isShowForm:(state,action)=>{
        state.showForm = action.payload;
    },
 

  }
});


export const { clearList, addItem, removeItem, isShowForm } = shopListSlice.actions;
export default shopListSlice.reducer;















