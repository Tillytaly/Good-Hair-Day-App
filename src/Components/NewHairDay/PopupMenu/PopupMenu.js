import React, { useState } from "react";
import CheckboxForm from "./CheckboxForm";
import BurgerButton from "./BurgerButton";
const PopupMenu = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuStateHandler = () => {
   setMenuOpen(!menuOpen);
  };

  const checkboxDataHandler = (checkboxValues) => {
    props.onChangeFormInputs(checkboxValues)
  };

  return (
    <div className="popup-menu">
      <BurgerButton menuState={menuOpen}  newMenuState={menuStateHandler} />
      <CheckboxForm
        menuState={menuOpen}
        newMenuState={menuStateHandler}
        onNewHairDayOptions={checkboxDataHandler}
      />
    </div>
  );
};

export default PopupMenu;
