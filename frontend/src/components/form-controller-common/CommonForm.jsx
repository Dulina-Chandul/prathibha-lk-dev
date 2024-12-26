import React from "react";
import PropTypes from "prop-types";
import { Button } from "../ui/button";
import FormControls from "./FormControls";

const CommonForm = ({
  handleSubmit,
  buttonText = "Submit",
  formControlls,
  formData,
  setFormData,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <FormControls
        formControlls={formControlls}
        formData={formData}
        setFormData={setFormData}
      />
      <Button className="w-full h-12 text-lg bg-[#FF4A61] hover:bg-[#ff3349] mt-6">
        {buttonText}
      </Button>
    </form>
  );
};

CommonForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  buttonText: PropTypes.string,
  formControlls: PropTypes.array.isRequired,
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
};
export default CommonForm;
