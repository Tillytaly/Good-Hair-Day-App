
import React, { useState } from "react";
const MenuButton = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuBtnHandler = () => {
    if (!menuOpen) {
      setMenuOpen(true);
    }
    else{
        setMenuOpen(false);
    }
  };

  return (
    <div
      className={`menu-btn  ${menuOpen ? "open" : ''}`}
      onClick={menuBtnHandler}
    >
      <div className={`menu-btn__burger`}></div>
    </div>
  );
};

export default MenuButton;
