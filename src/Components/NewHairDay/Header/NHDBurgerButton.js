import React from "react";

const NHDBurgerButton = (props) => {
  return (
    <div
      className={`btn ${props.isHeaderOpen ? "open" : ""}`}
      onClick={props.onClick}
    >
      <div className="btn__burger"></div>
    </div>
  );
};

export default NHDBurgerButton;
