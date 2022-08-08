import React from "react";
import {Route, RouteProps } from "react-router";
import {Redirect} from 'react-router-dom';
import { useSelector } from "react-redux";
import { RootState } from "../store";

const ProtectedRoute = (props: RouteProps) => {
  const auth = useSelector((state: RootState) => state.auth);

  console.log(auth)
  if (auth.account) {
    if (props.path === "/login") {
      return <Redirect to={"/"} />;
    }
    return <Route {...props} ></Route>;
  } else if (!auth.account) {
    console.log(auth)
    return <Redirect to={"/login"} />;
  } else {
    return <div>Not found</div>;
  }
};

export default ProtectedRoute;