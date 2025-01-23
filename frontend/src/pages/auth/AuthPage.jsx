import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { signInFormControll, signUpFormControll } from "@/config/config";
import CommonForm from "@/components/form-controller-common/CommonForm";
import { AuthContext } from "@/context/auth-context/AuthContext";
import CommonHeader from "@/components/common-view/CommonHeader";

const AuthPage = () => {
  const [currentTab, setCurrentTab] = useState("signin");
  const {
    signUpFormData,
    setSignUpFormData,
    signInFormData,
    setSignInFormData,
    handleSignUpSubmit,
    handleSignInSubmit,
  } = useContext(AuthContext);

  const getLeftSideContent = () => {
    if (currentTab === "signin") {
      return (
        <div className="flex-1 flex flex-col justify-center p-8 text-white">
          <h2 className="text-8xl text-white font-bold mb-4 ">Welcome Back!</h2>
          <p className="text-2xl mb-4">
            We're glad to see you again! Sign in to continue improving your
            English skills with Prathibha LK. Your learning journey is <br />{" "}
            <span className="font-bold ">just one step away!</span>
          </p>
        </div>
      );
    } else if (currentTab === "signup") {
      return (
        <div className="flex-1 flex flex-col justify-center p-8 text-white">
          <h2 className="text-7xl font-bold mb-4">
            Get Started with Prathibha LK!
          </h2>
          <p className="text-2xl mb-4">
            Join our growing community of learners! Prathibha LK is here to help
            you master English through personalized lessons, daily challenges,
            and much more. Start your journey today!
          </p>
        </div>
      );
    }
  };

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <CommonHeader />
      <main className="flex flex-row items-center justify-center min-h-screen bg-gray-50 bg-gradient-to-r from-[#a21caf] to-[#d946ef] mt-20">
        {getLeftSideContent()}
        <div className="flex-1 flex flex-col items-center justify-center min-h-screen p-8 bg-white">
          <Tabs
            defaultValue="signin"
            className="w-full max-w-2xl"
            onValueChange={setCurrentTab}
          >
            <TabsList className="grid w-full grid-cols-2 ">
              <TabsTrigger value="signin">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>

            {/* Sign In Form */}
            <TabsContent value="signin">
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">
                    Sign In
                  </CardTitle>
                  <CardDescription className="text-center">
                    Sign in to your account
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CommonForm
                    formControlls={signInFormControll}
                    formData={signInFormData}
                    setFormData={setSignInFormData}
                    handleSubmit={handleSignInSubmit}
                    buttonText="Sign In"
                  />
                </CardContent>
              </Card>
            </TabsContent>

            {/* Sign Up Form */}
            <TabsContent value="signup">
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">
                    Create Account
                  </CardTitle>
                  <CardDescription className="text-center">
                    Sign up to start your learning journey
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CommonForm
                    formControlls={signUpFormControll}
                    formData={signUpFormData}
                    setFormData={setSignUpFormData}
                    handleSubmit={handleSignUpSubmit}
                    buttonText="Sign Up"
                  />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default AuthPage;
