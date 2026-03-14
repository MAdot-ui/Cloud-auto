import React from "react";

export const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className="layout-app-container">{children}</div>
);
