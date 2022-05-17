import Button from "./UI/Button";

const FormFooter = () => {
  return (
    <div class="formFooter">
      <Button className="formFooter-button formFooter-button__cancel" type="submit">
        Cancel
      </Button>
      <Button
        className="formFooter-button formFooter-button__submit"
        type="submit"
        value="submit"
      >
        Submit
      </Button>
    </div>
  );
};

export default FormFooter;