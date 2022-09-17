import React from "react";
import { ErrorMessage, useField } from "formik";

const Input = ({ label, touched, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="form-group mb-3">
      <label htmlFor={field.name}>{label}</label>
      <input
        {...field}
        {...props}
        name={field.name}
        id={field.name}
        className={`form-control form-control-lg  
        ${ meta.touched && meta.error && `is-invalid` }`}
      />

      <ErrorMessage component="div" className="error" name={field.name} />
    </div>
  );
};

export default Input;
