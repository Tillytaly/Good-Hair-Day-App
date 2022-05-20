const FormInput = (props) => {
    return (
      <div className ="form--input-container">
        <label>Treatment</label>
        <input type={props.inputType ? props.inputType : "text"} required></input>
      </div>
    );
  };
  
  export default FormInput;
  