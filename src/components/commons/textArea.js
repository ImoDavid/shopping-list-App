import React from "react";
import { ErrorMessage, useField } from "formik";

const TextArea = ({ label, touched, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="form-group mb-3">
      <label htmlFor={label} className="form-label">
        {label}
      </label>
      <textarea
        {...field}
        {...props}
        className={`form-control form-control-lg  ${
          meta.touched && meta.error && `is-invalid`
        }`}
        rows="3"
      ></textarea>

      <ErrorMessage component="div" className="error" name={field.name} />
    </div>
  );
};

export default TextArea;
