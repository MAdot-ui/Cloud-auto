import React from "react";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./routes";

export const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};
