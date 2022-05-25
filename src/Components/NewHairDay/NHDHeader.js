import React, { useState } from "react";
import NHDOptionsForm from "./Header/NHDOptionsForm";
import NHDBurgerButton from "./Header/NHDBurgerButton";

const NHDHeader = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="popup-menu">
      <NHDBurgerButton menuState={isOpen} newMenuState={toggle} />
      <NHDOptionsForm
        isHeaderOpen={isOpen}
        onSubmit={toggle}
        onChange={props.onChange}
      />
    </div>
  );
};

export default NHDHeader;
