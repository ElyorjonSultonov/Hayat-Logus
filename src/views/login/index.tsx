import React from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Typography,
} from "@mui/material";
import {
  CloseOutlined,
  ErrorOutlineOutlined,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import loginImage from "../../assets/img/image 1.png";
import styles from "./index.module.scss";
import { Item } from "../../themes/customItems";
import { ILoginState } from "../../models/login";

const LoginView = ({
  values,
  handleChange,
  checkInput,
  handleClickShowPassword,
  handleMouseDownPassword,
  setValues,
  errorClient,
  loginAction,
}: {
  values: ILoginState;
  setValues: (obj: ILoginState) => void;
  handleChange: (
    prop: keyof ILoginState
  ) => (event: React.ChangeEvent<HTMLInputElement>) => undefined | void;
  checkInput: (event: any, type: string) => void;
  handleClickShowPassword: () => void;
  handleMouseDownPassword: (event: React.MouseEvent<HTMLButtonElement>) => void;
  errorClient: boolean;
  loginAction: (event: React.MouseEvent) => void;
}) => {
  return (
    <Container
      maxWidth="xl"
      sx={{ height: "100vh", width: "1920px", padding: "0 !important" }}
    >
      <Grid container spacing={0}>
        <Grid item xl={7} height={"100%"} width={"calc(100% - 800px)"}>
          <Item height="100vh">
            <Box
              sx={{
                width: "581px",
              }}
            >
              <Typography
                variant={"interFont"}
                component="div"
                className={styles.form_title}
              >
                Вход в систему Госпиталь
                <Typography
                  variant={"interFont"}
                  component="span"
                  className={styles.subtitle}
                >
                  Hayat Medical Center
                </Typography>
              </Typography>
                <FormGroup >
                  <FormControl
                    error={values.isLoginValid === false}
                    className={styles.input}
                    variant="outlined"
                  >
                    <InputLabel>Логин</InputLabel>
                    <OutlinedInput
                      type="text"
                      label="Логин"
                      value={values.login}
                      onChange={handleChange("login")}
                      onBlur={(e: any) => checkInput(e, "login")}
                    />

                    {values.isLoginValid === false && (
                      <FormHelperText error>
                        Ведите более трех символов
                      </FormHelperText>
                    )}
                  </FormControl>

                  <FormControl
                    error={values.isPasswordValid === false}
                    className={styles.input}
                    variant="outlined"
                  >
                    <InputLabel htmlFor="outlined-adornment-password">
                      Пароль
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={values.showPassword ? "text" : "password"}
                      value={values.password}
                      onChange={handleChange("password")}
                      onBlur={(e: any) => checkInput(e, "password")}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {values.showPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />

                    {values.isPasswordValid === false && (
                      <FormHelperText error>
                        Введите более трех символов
                      </FormHelperText>
                    )}
                  </FormControl>
                  {errorClient && (
                    <Box className={`${styles.error_block}`}>
                      <div className={styles.left_side}>
                        <ErrorOutlineOutlined sx={{ color: "#fff" }} />
                        <Typography component={"span"}>
                          Логин или пароль введен неправильно
                        </Typography>
                      </div>
                      <CloseOutlined sx={{ color: "#fff" }} />
                    </Box>
                  )}

                  <Item
                    sx={{
                      justifyContent: "space-between",
                      paddingRight: "16px",
                      marginBottom: "30px",
                    }}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{ height: "40px" }}
                          onChange={(event: any) =>
                            setValues({
                              ...values,
                              rememberMe: event.target.checked,
                            })
                          }
                        />
                      }
                      label="Запомните пароль"
                    />

                    <Link
                      href="#/"
                      underline="none"
                      color="primary"
                      fontWeight="500"
                    >
                      Забыли пароль ?
                    </Link>
                  </Item>

                  <Button
                    sx={{ height: "42px" }}
                    // disabled={
                    //   !(
                    //     values.isLoginValid === true &&
                    //     values.isPasswordValid === true
                    //   )
                    // }
                    color="primary"
                    variant="contained"
                    onClick={loginAction}
                  >
                    Вход в систему
                  </Button>
                </FormGroup>
            </Box>
          </Item>
        </Grid>
        <Grid item xl={5} height={"100%"}>
          <Box height="100vh">
            <img
              src={loginImage}
              alt="login_photo"
              className={styles.login_photo}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginView;
