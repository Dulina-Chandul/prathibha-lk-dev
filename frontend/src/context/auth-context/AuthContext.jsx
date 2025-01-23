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
  const [numberOFLoginsInASession, setNumberOFLoginsInASession] = useState(0);

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await registerService(signUpFormData);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 400) {
        throw new Error("Username or Email already exist");
      } else {
        throw new Error("An error occurred during registration.");
      }
    }
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
      // Update the number of logins in a session
      setNumberOFLoginsInASession((prev) => prev + 1);
    } else {
      setAuth({
        authenticated: false,
        user: null,
      });
    }
  };

  // Check Auth User

  const checkAuthUser = async () => {
    try {
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
    } catch (error) {
      console.log(error);
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
        numberOFLoginsInASession,
        setNumberOFLoginsInASession,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
