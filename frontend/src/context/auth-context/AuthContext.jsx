import { initialSignInFormData, initialSignUpFormData } from "@/config/config";
import {
  checkAuthService,
  loginService,
  registerService,
} from "@/services/services";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData);
  const [signInFormData, setSignInFormData] = useState(initialSignInFormData);
  const [auth, setAuth] = useState({
    authenticated: false,
    user: null,
  });

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    const data = await registerService(signUpFormData);
    console.log(data);
  };

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    const data = await loginService(signInFormData);

    if (data.success) {
      sessionStorage.setItem(
        "accessToken",
        JSON.stringify(data.data.accessToken)
      );
      setAuth({
        authenticated: true,
        user: data.data.user,
      });
    } else {
      setAuth({
        authenticated: false,
        user: null,
      });
    }
  };

  // Check Auth User

  const checkAuthUser = async () => {
    const data = await checkAuthService();

    if (data.success) {
      setAuth({
        authenticated: true,
        user: data.data.user,
      });
    } else {
      setAuth({
        authenticated: false,
        user: null,
      });
    }
  };

  const resetCredentials = () => {
    setAuth({
      authenticated: false,
      user: null,
    });
  };

  useEffect(() => {
    checkAuthUser();
  }, []);

  console.log(auth);

  return (
    <AuthContext.Provider
      value={{
        signUpFormData,
        setSignUpFormData,
        signInFormData,
        setSignInFormData,
        handleSignUpSubmit,
        handleSignInSubmit,
        auth,
        resetCredentials,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
