import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router";
import { observer, useLocalObservable } from "mobx-react-lite";
import AuthorizationStateKeeper from "../store/AuthorizationStateKeeper";
import Header from "../components/header";
import { RoutingData } from "./config";
import { MenuItems } from "../constants/menu";
import FkassaRegistryContainer from "../containers/fkassa/registry";
import ProtectedRoute from "./protectedRoute";
import LoginContainer from "../containers/login";
const AppRouting = observer(() => {
  const authorizationStateKeeper = useLocalObservable(
    () => AuthorizationStateKeeper.instance
  );

  const { role } = authorizationStateKeeper;

  //  RoutingData["admin"];
  useEffect(() => {
    if (!RoutingData[role]) {
      throw new Error(`This type "${role}" of role is not defined `);
    }
  }, [role]);

  return (
    <>
      {/* {<Header data={MenuItems["fapteka"]} />} */}
      {/* <FkassaRegistryContainer /> */}

      <Routes>
        <Route path="login" element={<LoginContainer />} />
        <Route element={<ProtectedRoute />}>
          {RoutingData[role].map((item, i) => {
            return (
              <Route key={i}>
                <Route key={i} path={item.path} element={item.component} />
                {item.global && (
                  <Route
                    path="*"
                    element={<Navigate to={item.path} replace />}
                  />
                )}
              </Route>
            );
          })}
        </Route>
      </Routes>
    </>
  );
});
export default AppRouting;
