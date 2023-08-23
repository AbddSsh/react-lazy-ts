import { lazy } from "react";
// import HomePage from "../pages/HomePage";
// import TodoPage from "../pages/TodoPage";
// import TodosPage from "../pages/TodosPage";
// import UserPage from "../pages/UserPage";

const TodosPage = lazy(() => import("../pages/TodosPage"));
const HomePage = lazy(() => import("../pages/HomePage"));
const TodoPage = lazy(() => import("../pages/TodoPage"));
const UserPage = lazy(() => import("../pages/UserPage"));

export interface IRoute {
  path: string;
  component: React.ComponentType;
}

export enum RouteNames {
  HOME = "/home",
  TODOS = "/todos",
  REDIRECT = "*",
}

export const routes: IRoute[] = [
  { path: RouteNames.HOME, component: HomePage },
  { path: RouteNames.TODOS, component: TodosPage },
  { path: RouteNames.REDIRECT, component: HomePage },
  { path: `${RouteNames.TODOS}/:id`, component: TodoPage },
  { path: `${RouteNames.HOME}/:id`, component: UserPage },
];
