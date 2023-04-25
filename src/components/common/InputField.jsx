import React from "react";

const InputField = ({
  onChange,
  type,
  name,
  id,
  placeholder,
  className,
  value,
  onBlur,
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      id={id}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      className={className}
    />
  );
};

export default InputField;
