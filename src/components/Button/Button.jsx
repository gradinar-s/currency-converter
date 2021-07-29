import React from "react";
import "./Button.sass";

const Button = ({ children, tranparent, className, onClick, disabled }) => {
  return (
    <button
      className={`${className} ${tranparent ? "button button_transparent" : "button"}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
