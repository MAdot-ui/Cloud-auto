import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { LoginPage, ListScene, DetailScene } from "../scenes";
import { switchRoutes } from "../router";
import { AppLayout } from "../layouts";

export const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={switchRoutes.root} element={<LoginPage />} />
        <Route
          path="*"
          element={
            <AppLayout>
              <Routes>
                <Route path={switchRoutes.list} element={<ListScene />} />
                <Route path={switchRoutes.detail} element={<DetailScene />} />
              </Routes>
            </AppLayout>
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};
