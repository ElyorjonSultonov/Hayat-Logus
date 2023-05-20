import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import logo from "../../assets/icons/logo.svg";
const Router = () => {
  return (
    <div className={styles.routerWrapper}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <img src={logo} alt="" />
        <div>
          <Link to="/global/branches">
            <Button variant="contained">nGlobal</Button>
          </Link>
          <Link to="/pharmacy/income">
            <Button variant="contained">nApteka</Button>
          </Link>
          <Link to="/pharmacy">
            <Button variant="contained">nApteka</Button>
          </Link>
        </div>
      </Box>
    </div>
  );
};

export default Router;
