import React from "react";
import "./Button.sass";

const Button = ({ children }) => {
  return <button className="button">{children}</button>;
};

export default Button;
