import React, { useState } from "react";
const Collapsable = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapsable = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="collapsable">
          <button onClick={toggleCollapsable} className="collapsable--btn"> {props.name}</button>

        {isOpen && <ul className="collapsable--list"><li >2022</li><li>2021</li></ul>}
      </div>
    </>
  );
};

export default Collapsable;