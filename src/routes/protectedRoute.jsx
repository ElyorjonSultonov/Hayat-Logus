import React from "react";
import { RoutingData } from "./config";
import AuthorizationStateKeeper from "../store/AuthorizationStateKeeper";
import {  useLocalObservable } from "mobx-react-lite";

import Header from "../components/header";
import { MenuItems } from "../constants/menu";
import { Navigate, Outlet } from "react-router-dom";
import FkassaRegistryContainer from "../containers/fkassa/registry";
import "./protectedRoute.scss"

function ProtectedRoute() {
  
     const authorizationStateKeeper = useLocalObservable(
    () => AuthorizationStateKeeper.instance
  );
  const { role } = authorizationStateKeeper;
  // const role=localStorage.getItem("role")



  return role === "admin" ? (
    <div className="protected-route">
      {<Header data={MenuItems["fapteka"]} />}
      <div className="main-contents">
       <FkassaRegistryContainer/>
        <Outlet />
      </div>
    </div>
  ) : (
    <Navigate to="login" replace/>
  );
}

export default ProtectedRoute;
