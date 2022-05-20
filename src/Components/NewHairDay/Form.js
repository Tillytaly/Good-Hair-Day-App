import StarRating from "./StarRating";
import FormInput from "./FormInput";
import FormFooter from "./FormFooter";
const Form = (props) => {
  return (
    <>
      <form className="form">
        <FormInput />
        <StarRating/>
       <FormFooter/>
      </form>
    </>
  );
};

export default Form;
