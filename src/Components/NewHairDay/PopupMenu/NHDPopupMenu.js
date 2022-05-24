import React, { useState } from "react";
import CheckboxForm from "./NHDCheckboxForm";
import NHDBurgerButton from "./NHDBurgerButton";
const NHDPopupMenu = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuStateHandler = () => {
    setMenuOpen(!menuOpen);
  };

  const checkboxDataHandler = (checkboxValues) => {
    props.onChangeFormInputs(checkboxValues);
  };

  return (
    <div className="popup-menu">
      <NHDBurgerButton menuState={menuOpen} newMenuState={menuStateHandler} />
      <CheckboxForm
        menuState={menuOpen}
        newMenuState={menuStateHandler}
        onNewHairDayOptions={checkboxDataHandler}
      />
    </div>
  );
};

export default NHDPopupMenu;
