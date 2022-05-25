import React, { useState } from "react";
import NHDOptionsForm from "./NHDOptionsForm";
import NHDBurgerButton from "./NHDBurgerButton";
const NHDPopupMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
   
  };

  return (
    <div className="popup-menu">
      <NHDBurgerButton menuState={isOpen} newMenuState={toggle} />
      <NHDOptionsForm
        isMenuOpen={isOpen}
        onSubmit={toggle}
        onChange={props.onChange}
      />
    </div>
  );
};

export default NHDPopupMenu;
