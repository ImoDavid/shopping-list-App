import React from 'react';
import { useDispatch } from 'react-redux';
import { clearList, isShowForm } from '../../features/shoppingList/shoppingListSlice';
import { closeModal } from '../../features/modal/modalSlice';


const Modal = () => {
  const dispatch = useDispatch();
    return (
      <section className='modal-container'>
        <div className='modal-center'>
          <h4>Remove all items from your shopping List?</h4>
          <div className='btn-container'>
            <button type='button' className='btn btn-danger' onClick={()=> {
              dispatch(clearList())
              dispatch(isShowForm(false));
              dispatch(closeModal())}}>
              confirm
            </button>
            <button type='button' className='btn btn-outline-warning'onClick={()=>{
              dispatch(closeModal());
            }}>
              cancel
            </button>
          </div>
        </div>
      </section>
    );
  };
  export default Modal;