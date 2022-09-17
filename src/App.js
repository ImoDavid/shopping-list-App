import React from 'react';
import Modal from './components/commons/modal';
import User from './components/commons/user';
import ShoppingContainer from './components/shoppingContainer';
import {useSelector } from "react-redux";

function App() {
  const { isOpen } = useSelector((state) => state.modal);
  return (
    <React.Fragment>
      <User/> 
      {isOpen && <Modal/>}
      <ShoppingContainer/>
    </React.Fragment>
  );
}

export default App;
