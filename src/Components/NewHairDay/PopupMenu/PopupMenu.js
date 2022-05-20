import React, { useState } from "react";
import CheckboxForm from "./CheckboxForm";
import BurgerButton from "./BurgerButton";
const PopupMenu = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuStateHandler = (menuState) => {
    return setMenuOpen(menuState);
  };

  const checkboxValuesHandler = (checkboxValues) => {
    props.onChangeFormInputs(checkboxValues)
    setMenuOpen(false);
  };

  return (
    <div className="popup-menu">
      <BurgerButton newMenuState={menuStateHandler} />
      <CheckboxForm
        onButtonClick={menuOpen}
        onChangeFormInputs={checkboxValuesHandler}
      />
    </div>
  );
};

export default PopupMenu;
