import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Button } from "../ui/button";
import FormControls from "./FormControls";
import Confetti from "react-confetti";
import toast, { Toaster } from "react-hot-toast";

const CommonForm = ({
  handleSubmit,
  buttonText = "Submit",
  formControlls,
  formData,
  setFormData,
}) => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  // Confirm Password in Sign Up process
  const checkPassword = () => {
    if (formData.password !== formData.confirmPassword) {
      console.log(formData.password);
      console.log(formData.confirmPassword);
      toast.error("Password doesn't match. Please try again.", {
        position: "top-right",
      });
      return false;
    }
    return true;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (buttonText === "Sign Up") {
      if (!checkPassword()) {
        return;
      }

      toast.success("Registration successful!", {
        position: "top-right",
      });
      setShowConfetti(true);
    }

    setFormData({});
    handleSubmit(e);
  };

  return (
    <>
      {showConfetti && <Confetti />}
      <Toaster
        toastOptions={{
          duration: 8000,
        }}
      />{" "}
      <form onSubmit={handleFormSubmit}>
        <FormControls
          formControlls={formControlls}
          formData={formData}
          setFormData={setFormData}
        />
        <Button
          type="submit"
          className="w-full h-12 text-lg bg-[#FF4A61] hover:bg-[#ff3349] mt-6"
        >
          {buttonText}
        </Button>
      </form>
    </>
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
