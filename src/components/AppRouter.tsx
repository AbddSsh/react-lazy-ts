import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "../routes";

const AppRouter = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} Component={route.component} />
      ))}
    </Routes>
  );
};

export default AppRouter;
