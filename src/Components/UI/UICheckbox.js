const UICheckbox = (props) => {
    return (
      <div className={`UI-checkbox-container ${props.className}`}>
        <input
          type="checkbox"
          id={props.id}
          name={props.name}
          onChange={props.onChange}
          checked={props.checked && 'checked'}
        ></input>
        <label htmlFor={props.id}>{props.name}</label>
      </div>
    );
  };
  
  export default UICheckbox