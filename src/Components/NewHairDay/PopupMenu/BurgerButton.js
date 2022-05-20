import React, { useState } from "react";
const BurgerButton = (props) => {
  const [btnOpen, setBtnOpen] = useState(false);

  const menuBtnHandler = () => {
      setBtnOpen(!btnOpen);
    }
    props.newMenuState(btnOpen);

  return (
    <div className={`btn ${btnOpen ? "open" : ""}`} onClick={menuBtnHandler}>
      <div className="btn__burger"></div>
    </div>
  );
};


export default BurgerButton;
