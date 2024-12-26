import { Skeleton } from "@/components/ui/skeleton";
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

  const [loading, setLoading] = useState(true);

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    const data = await registerService(signUpFormData);
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
      // setLoading(false);
    } else {
      setAuth({
        authenticated: false,
        user: null,
      });
      // setLoading(false);
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
        setLoading(false);
      } else {
        setAuth({
          authenticated: false,
          user: null,
        });
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      if (!error?.response?.data?.success) {
        setAuth({
          authenticated: false,
          user: null,
        });
        setLoading(false);
      }
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
      {loading ? <Skeleton /> : children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
