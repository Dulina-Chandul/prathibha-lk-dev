// AuthContext.jsx
import { initialSignInFormData, initialSignUpFormData } from "@/config/config";
import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData);
  const [signInFormData, setSignInFormData] = useState(initialSignInFormData);

  return (
    <AuthContext.Provider
      value={{
        signUpFormData,
        setSignUpFormData,
        signInFormData,
        setSignInFormData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
