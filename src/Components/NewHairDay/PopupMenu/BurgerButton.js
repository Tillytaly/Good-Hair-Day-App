import React from "react";
const BurgerButton = (props) => {


  return (
    <div className={`btn ${props.menuState ? "open" : "" }`} onClick={props.newMenuState}>
      <div className="btn__burger"></div>
    </div>
  );
};

export default BurgerButton;
