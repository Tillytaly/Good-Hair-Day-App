import Button from "../UI/Button";

const FormFooter = (props) => {
  return (
    <div className ="form-footer">
      <Button className=" form-footer--button form-footer--button__cancel" type="button" onClick={props.onCancel}>
        Cancel
      </Button>
      <Button
        className="form-footer--button form-footer--button__submit"
        type="submit"
        value="submit"
      >
        Submit
      </Button>
    </div>
  );
};

export default FormFooter;