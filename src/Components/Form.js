import Button from "./UI/Button";
import StarRating from "./StarRating";
import FormInput from "./FormInput";
const Form = (props) => {
  return (
    <form className="form">
      <div className = "form-titleContainer titleContainer" >
        <h2 class=" titleContainer-title">Add Hair Day</h2>
      </div>
      <FormInput/>
  
        <StarRating/>
        <Button className="form-button" type="submit" value="submit">Submit</Button>
    </form>
  );
};

export default Form;
