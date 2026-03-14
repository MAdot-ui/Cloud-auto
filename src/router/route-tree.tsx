import React from "react";
import { createRootRoute, createRoute, Outlet } from "@tanstack/react-router";
import { LoginPage, ListScene, DetailScene } from "../scenes";
import { AppLayout } from "../layouts";

export const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: LoginPage,
});

const layoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "layout",
  component: () => (
    <AppLayout>
      <Outlet />
    </AppLayout>
  ),
});

const listRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/list",
  component: ListScene,
});

const detailRoute = createRoute({
  getParentRoute: () => layoutRoute,
  path: "/detail/$login",
  component: DetailScene,
});

export const routeTree = rootRoute.addChildren([
  loginRoute,
  layoutRoute.addChildren([listRoute, detailRoute]),
]);
