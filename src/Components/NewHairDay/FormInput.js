const FormInput = (props) => {
    return (
      <div className ="form--input-container">
        <label>{props.inputLabel}</label>
        <input type={props.inputType}></input>
      </div>
    );
  };
  
  export default FormInput;
  