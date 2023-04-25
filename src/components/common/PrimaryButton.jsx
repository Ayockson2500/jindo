import React from "react";

const PrimaryButton = ({ className, children, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default PrimaryButton;
