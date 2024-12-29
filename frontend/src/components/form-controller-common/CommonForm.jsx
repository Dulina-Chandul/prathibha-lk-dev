import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Button } from "../ui/button";
import FormControls from "./FormControls";
import Confetti from "react-confetti";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "@/context/auth-context/AuthContext";

const CommonForm = ({
  handleSubmit,
  buttonText = "Submit",
  formControlls,
  formData,
  setFormData,
}) => {
  const [signUpButtonClicked, setSignUpButtonClick] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  // const { auth } = useContext(AuthContext);

  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  const checkPassword = () => {
    if (formData.password !== formData.confirmPassword) {
      console.log(formData.password);
      console.log(formData.confirmPassword);
      toast.error("Password doesn't match. Please try again.", {
        position: "top-right",
      });
      return false; // Prevent form submission
    }
    return true; // Allow form submission
  };

  // const checkLoginAuth = () => {
  //   if (auth.user !== null) {
  //     toast.success("Login successful!", {
  //       position: "top-right",
  //     });
  //   } else {
  //     toast.error("Login failed. Please try again.", {
  //       position: "top-right",
  //     });
  //   }
  // };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (buttonText === "Sign Up") {
      if (!checkPassword()) {
        return; // Stop if passwords don't match
      }

      toast.success("Registration successful!", {
        position: "top-right",
      });
      setShowConfetti(true); // Show Confetti
    }

    if (buttonText === "Sign In") {
      // checkLoginAuth();
    }

    setFormData({}); // Reset form data
    handleSubmit(e); // Call the provided handleSubmit function
  };

  return (
    <>
      {showConfetti && <Confetti />} {/* Show Confetti if enabled */}
      <Toaster
        toastOptions={{
          duration: 8000,
        }}
      />{" "}
      {/* Toast container */}
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
