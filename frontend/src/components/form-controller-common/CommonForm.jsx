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
  const [showConfetti, setShowConfetti] = useState(false);

  const { auth } = useContext(AuthContext);

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
      toast.error("Password doesn't match. Please try again.", {
        position: "top-right",
      });
      return false;
    }
    return true;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (buttonText === "Sign Up") {
      if (!checkPassword()) {
        return;
      }
    }
    try {
      const result = await handleSubmit(e);

      if (buttonText === "Sign Up") {
        if (result.success) {
          toast.success("Registration successful!", {
            position: "top-right",
          });
          setShowConfetti(true);
        } else {
          toast.error(result.message || "Username or Email already exist", {
            position: "top-right",
          });
        }
      }
    } catch (error) {
      // Send Error Code
      toast.error(error.message || "An error occurred during registration.", {
        position: "top-right",
      });
    }

    setFormData({});
  };

  return (
    <>
      {showConfetti && <Confetti />}
      <Toaster
        toastOptions={{
          duration: 8000,
        }}
      />
      <form onSubmit={handleFormSubmit}>
        <FormControls
          formControlls={formControlls}
          formData={formData}
          setFormData={setFormData}
        />
        <Button
          type="submit"
          className="w-full h-12 text-lg bg-gradient-to-r transition-colors duration-5000 ease-in-out from-[#a21caf] to-[#d946ef] mt-6 hover:bg-gradient-to-r hover:from-[#d946ef] hover:to-[#a21caf] hover:text-white"
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
