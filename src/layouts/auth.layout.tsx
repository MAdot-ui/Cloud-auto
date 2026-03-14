import React, { PropsWithChildren } from "react";

export const AuthLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="layout-center">{children}</div>;
};
