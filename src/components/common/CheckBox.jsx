import React from "react";

const CheckBox = ({ onChange, className, name, id, type }) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      className={className}
      onChange={onChange}
    />
  );
};

export default CheckBox;
