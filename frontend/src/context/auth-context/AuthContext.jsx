import { initialSignInFormData, initialSignUpFormData } from "@/config/config";
import { loginService, registerService } from "@/services/services";
import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData);
  const [signInFormData, setSignInFormData] = useState(initialSignInFormData);

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    const data = await registerService(signUpFormData);
  };

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    const data = await loginService(signInFormData);
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
