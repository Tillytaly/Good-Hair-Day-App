import React, { useState } from "react";
import CheckboxForm from "./CheckboxForm";
import BurgerButton from "./BurgerButton";
const PopupMenu = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuStateHandler = (menuState) => {
    return setMenuOpen(menuState);
  };

  const checkboxDataHandler = (checkboxValues) => {
    props.onChangeFormInputs(checkboxValues)
    setMenuOpen(false);
  };

  return (
    <div className="popup-menu">
      <BurgerButton newMenuState={menuStateHandler} menuState={menuOpen}/>
      <CheckboxForm
        menuState={menuOpen}
        onNewHairDayOptions={checkboxDataHandler}
      />
    </div>
  );
};

export default PopupMenu;
