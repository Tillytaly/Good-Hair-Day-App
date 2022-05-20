import React, { useState } from "react";
import CheckboxForm from "./CheckboxForm";
import BurgerButton from "./BurgerButton";
const PopupMenu = (props) => {
 const [menuOpen, setMenuOpen] = useState(false);

 const menuStateHandler = (menuState) =>{
   return setMenuOpen(menuState);
 }

  return (
    <div className="popup-menu">
      <BurgerButton newMenuState = {menuStateHandler}/>
      <CheckboxForm onButtonClick = {menuOpen} />
    </div>
  );
};

export default PopupMenu;
