import StarRating from "./StarRating";
import FormInput from "./FormInput";
import FormFooter from "./FormFooter";
const Form = (props) => {
  return (
    <>
      <form className="form">
        {props.formData.map((checkboxDataObj) => (
          <FormInput
            inputLabel={checkboxDataObj.name}
            key={checkboxDataObj.id}
            inputType={checkboxDataObj.type}
          />
        ))}
        <StarRating />
        <FormFooter onCancel ={props.onNewHairDayCancel}/>
      </form>
    </>
  );
};

export default Form;
