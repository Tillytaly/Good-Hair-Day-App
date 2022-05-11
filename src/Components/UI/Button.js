import "./UlStyles.css"

const Button = (props) => {
  return (
    <button className={`button ${props.className}`} type={props.type} value={props.value}>
      {props.children}
    </button>
  );
};

export default Button;