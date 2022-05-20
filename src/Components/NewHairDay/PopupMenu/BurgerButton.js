import React, { useState } from "react";
const BurgerButton = (props) => {
  const [btnOpen, setBtnOpen] = useState(false);

  const menuBtnHandler = () => {
    if (!btnOpen) {
      setBtnOpen(true);
      props.newMenuState(true);
    } else {
      setBtnOpen(false);
      props.newMenuState(false);
    }
  };

  return (
    <div className={`btn ${btnOpen ? "open" : ""}`} onClick={menuBtnHandler}>
      <div className="btn__burger"></div>
    </div>
  );
};

export default BurgerButton;
