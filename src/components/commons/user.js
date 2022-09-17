import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Typewriter from 'typewriter-effect';
import { showMe } from '../../features/modal/modalSlice';
import { FaUserSecret } from "react-icons/fa";


const User = () => {

    const dispatch= useDispatch();
    const { isShowMe } = useSelector((state) => state.modal);

    return ( 
    <div className='master'>
      <div className="ninja">
      {isShowMe && 
        <div className="typewriter">
          <Typewriter
          onInit={(typewriter ) => {
            typewriter.pauseFor(5)
            .typeString('<strong>Imo David</strong>')
            .start()
          } } />
        </div>
      
      }  
      <span className='ninja-icon' onClick={()=> dispatch(showMe(true))}>
        <FaUserSecret/></span>
      </div>
      </div>
     );
}
 
export default User;