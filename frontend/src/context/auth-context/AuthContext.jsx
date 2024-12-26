import { initialSignInFormData, initialSignUpFormData } from "@/config/config";
import { registerService } from "@/services/services";
import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData);
  const [signInFormData, setSignInFormData] = useState(initialSignInFormData);

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    const data = await registerService(signUpFormData);
    console.log(data);
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(signInFormData);
  };

  return (
    <AuthContext.Provider
      value={{
        signUpFormData,
        setSignUpFormData,
        signInFormData,
        setSignInFormData,
        handleSignUpSubmit,
        handleSignInSubmit,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
