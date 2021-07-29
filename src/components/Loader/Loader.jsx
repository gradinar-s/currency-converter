import React from "react";
import LoaderIcon from "../../assets/images/Loader.svg";

import "./Loader.sass";

const Loader = ({ className }) => {
  return (
    <div className={`${className} loader`}>
      <img className="loader-icon" src={LoaderIcon} alt="" />
    </div>
  );
};

export default Loader;
