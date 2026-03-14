import { generatePath } from "react-router-dom";
import { createRouter, createHashHistory } from "@tanstack/react-router";
// The route-tree file is generated automatically. Do not modify this file manually.
import { routeTree } from "./route-tree";

interface SwitchRoutes {
  root: string;
  list: string;
  detail: string;
}

interface LinkRoutes extends Omit<SwitchRoutes, "detail"> {
  detail: (login: string) => string;
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
  list: "/list",
  detail: "/detail/:login",
};

export const routes: LinkRoutes = {
  ...switchRoutes,
  detail: (login: string) => generatePath(switchRoutes.detail, { login }),
};

const history = createHashHistory();

export const router = createRouter({
  routeTree,
  history,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
