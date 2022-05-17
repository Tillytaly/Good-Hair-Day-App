import Button from "./UI/Button";
import StarRating from "./StarRating";
import FormInput from "./FormInput";
import Dropdown from "./Dropdown";
const Form = (props) => {
  return (
<>
    <Dropdown/>
    <form className="form">
      <div className="form-titleContainer">
        <h2 className=" form-titleContainer__title">Add Hair Day</h2>
      </div>
      <FormInput />
      <StarRating />
      <Button className="form-button" type="submit" value="submit">
        Submit
      </Button>
    </form>
    </>
  );
};

export default Form;
