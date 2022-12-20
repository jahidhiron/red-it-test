import React from "react";
import { Routes } from "react-router";
import routes from "./Routes";
import { Route } from "react-router-dom";
import { PublicLayout } from "../layouts/publicLayout";

const Navigation = () => {
  return (
    <React.Suspense fallback={"Loading..."}>
      <Routes>
        {routes.map(({ component: Component, path, title }) => {
          return (
            <Route
              key={title}
              exact
              path={path}
              element={
                <PublicLayout
                  key={Date.now()}
                  component={Component}
                  title={title}
                />
              }
            />
          );
        })}
      </Routes>
    </React.Suspense>
  );
};

export default Navigation;
