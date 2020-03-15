import React from 'react';

function FormElement({
  children,
  label,
  htmlFor,
  className
}) {
  return (
    <label
      htmlFor={htmlFor}
      className={`${className} flex flex-row justify-between`}
    >
      <span className="mr-2">{label}</span>
      <div className="ml-2">
        {children}
      </div>
    </label>
  );
}

export default FormElement;
