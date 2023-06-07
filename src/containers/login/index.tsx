import { useLocalObservable } from "mobx-react-lite";
import React, { useState } from "react";
import { ILoginState } from "../../models/login";
import AuthorizationStateKeeper from "../../store/AuthorizationStateKeeper";
import LoginView from "../../views/login";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/base_url";

const LoginContainer = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState<ILoginState>({
    login: "",
    password: "",
    showPassword: false,
    isLoginValid: null,
    isPasswordValid: null,
    rememberMe: false,
  });

  const [errorClient, setErrorClient] = useState<boolean>(false);
  const localAuthorizationStateKeeper = useLocalObservable(
    () => AuthorizationStateKeeper.instance
  );
  const { setRole } = localAuthorizationStateKeeper;
  const { setToken } = localAuthorizationStateKeeper;
  const { setAccess } = localAuthorizationStateKeeper;
  const { setRefresh } = localAuthorizationStateKeeper;

  const handleChange =
    (prop: keyof ILoginState) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  const checkInput = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    let value: string = event.target.value;
    if (type === "login") {
      setValues({ ...values, isLoginValid: value.length > 3 });
    } else if (type === "password") {
      setValues({ ...values, isPasswordValid: value.length > 3 });
    }
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const loginAction = (event: React.MouseEvent) => {
    const formData = new FormData();
    formData.append("email", values.login);
    formData.append("password", values.password);

    axios
      .post(`${BASE_URL}/account/custom-login/`, formData)
      .then((response) => {
        setRefresh(JSON.stringify(response.data.refresh));
        setAccess(JSON.stringify(response.data.access));
        setRole("admin");
        navigate("/global/branches");
        setErrorClient(false);
      })
      .catch((err) => {
        setErrorClient(true);
      });
  };

  return (
    <LoginView
      values={values}
      setValues={setValues}
      checkInput={checkInput}
      handleChange={handleChange}
      handleClickShowPassword={handleClickShowPassword}
      handleMouseDownPassword={handleMouseDownPassword}
      errorClient={errorClient}
      loginAction={loginAction}
    />
  );
};

export default LoginContainer;
