import React, { useState } from "react";
import DropdownContent from "./DropdownContent";
const Dropdown = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuBtnHandler = () => {
    if (!menuOpen) {
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }
  };

  return (
    <div className="dropdown">
      <div
        className={`menu-btn  ${menuOpen ? "open" : ""}`}
        onClick={menuBtnHandler}
      >
        <div className="menu-btn__burger"></div>
      </div>
      <DropdownContent menuState={menuOpen}/>
    </div>
  );
};

export default Dropdown;
