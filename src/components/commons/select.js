import React from 'react';
import { ErrorMessage,useField } from 'formik';

const Select = ({label,touched,...props}) => {
    const [field, meta]= useField(props)
    
    return (
        <div className="form-group">
        <label htmlFor={label} className="form-label">
          {label}
        </label>
        <select
                {...field}
                {...props}
         className={`form-select  ${meta.touched && meta.error && `is-invalid`}`} 
         >   
          <option value="0"></option>
              <option value="1">houseHold Item</option>
              <option value="2">Electronics</option>
              <option value="3">Others</option>
         </select>
        


        <ErrorMessage component='div' className='error' name={field.name}/>
       
        </div> 
        
    ) 
        
}
 
export default Select;


























