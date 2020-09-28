import React from "react";
import { Route, Redirect } from "react-router-dom";
import authService from "../../services/authService";

export default function ProtectedRoute({
  component: Component,
  render,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!authService.getCurrentUser())
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location },
              }}
            />
          );
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
}
