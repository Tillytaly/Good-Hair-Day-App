import StarRating from "./StarRating";
import FormInput from "./FormInput";
import FormFooter from "./FormFooter";
import { v4 as uuidv4 } from "uuid";
const Form = (props) => {
  return (
    <>
      <form className="form">
        {props.formData.map((data) => <FormInput inputTitle={data} key={uuidv4()}/>)}
        <StarRating/>
       <FormFooter/>
      </form>
    </>
  );
};

export default Form;
