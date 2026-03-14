import { AuthLayout } from "../layouts";
import { LoginPod } from "../pods/login";
import React from "react";

export const LoginPage: React.FC = () => {
  return (
    <AuthLayout>
      <LoginPod />
    </AuthLayout>
  );
};
