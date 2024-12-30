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

const AuthPage = () => {
  const {
    signUpFormData,
    setSignUpFormData,
    signInFormData,
    setSignInFormData,
    handleSignUpSubmit,
    handleSignInSubmit,
  } = useContext(AuthContext);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 w-full bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-[#3168ba] to-[#73c3e8] bg-clip-text text-transparent">
                Prathibha
              </span>
              <span className="text-2xl font-medium text-[#FF4A61]">Learn</span>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
        <Tabs defaultValue="signin" className="w-full max-w-2xl">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          {/* Sign In Form */}
          <TabsContent value="signin">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Sign In</CardTitle>
                <CardDescription className="text-center">
                  Sign in to your account
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Sending Sign in form details */}
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
                {/* Sending Sign up form details */}
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
      </main>
    </div>
  );
};

export default AuthPage;
