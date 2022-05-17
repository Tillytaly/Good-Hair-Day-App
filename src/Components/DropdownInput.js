const DropdownInput = (props) => {
  return (
    <div className="checkboxContainer">
      <input type="checkbox" id={props.hairTreatment}></input>
      <label for={props.hairTreatment}>{props.hairTreatment}</label>
    </div>
  );
};

export default DropdownInput;
