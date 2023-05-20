import React from "react";
import { useLocalObservable } from "mobx-react-lite";
import AuthorizationStateKeeper from "../../store/AuthorizationStateKeeper";
import styles from "../../views/main/index.module.scss";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LogoutTwoToneIcon from "@mui/icons-material/LogoutTwoTone";
import { Button, Menu, MenuItem, TextField, Typography } from "@mui/material";
import logoImg from "../../assets/icons/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { ReportModal, ReturnModal } from "../../modals/modals";
import Modal from "../modal";

const Header = ({ data }) => {
  const [anchorEl, setAnchorEl] = React.useState<{
    index: string;
    elem: null | HTMLElement;
  }>({
    index: "",
    elem: null,
  });
  const [reportModal, setReportModal] = React.useState<boolean>(false);
  const [returnModal, setReturnModal] = React.useState<boolean>(false);
  const [smenaModal, setSmenaModal] = React.useState<boolean>(false);
  const [profileOpen, setProfileOpen] = React.useState<null | HTMLElement>(
    null
  );
  const localAuthorizationStateKeeper = useLocalObservable(
    () => AuthorizationStateKeeper.instance
  );
  const { setRole, removeToken } = localAuthorizationStateKeeper;
  const handleClick = (
    index: string,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorEl({ index, elem: event.currentTarget });
  };
  const handleLogOut = () => {
    setRole("NoAuth");
    removeToken();
  };
  const handleModalOpener = (path: string) => {
    if (path === "Отчёт") {
      setReportModal(true);
    } else if (path === "Открыть") {
      setSmenaModal(true);
    } else if (path === "Возврат на склад") {
      setReturnModal(true);
    } else {
      // setQuickAppointment(true)
    }
    handleClose();
  };

  const handleClose = () => {
    setAnchorEl({ index: "", elem: null });
  };

  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <Link to="/">
          <img src={logoImg} alt="logoImg" className={styles.logo} />
        </Link>
        <nav className={styles.nav}>
          {data.map((item, i) => {
            if (!item.dropdown) {
              return (
                <Link to={item.path} key={i} className={styles.nav_item}>
                  {item.button}
                </Link>
              );
            }
            return (
              <React.Fragment key={i}>
                <Button
                  id="basic-button"
                  aria-controls={
                    anchorEl.index === String(i) ? "basic-menu" : undefined
                  }
                  aria-haspopup="true"
                  aria-expanded={
                    anchorEl.index === String(i) ? "true" : undefined
                  }
                  onClick={(e) => handleClick(String(i), e)}
                  className={styles.nav_item}
                >
                  {item.button}
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl.elem}
                  open={anchorEl.index === String(i)}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                  className="header_dropdown_hidden"
                >
                  <Typography className="title">{item.title}</Typography>
                  {item.dropdown.map((dropdownItem, index) => {
                    return !dropdownItem.path ? (
                      <MenuItem
                        className={styles.dropdown_menu}
                        key={index}
                        onClick={() => handleModalOpener(dropdownItem.text)}
                      >
                        {dropdownItem.img}
                        {dropdownItem.text}
                      </MenuItem>
                    ) : (
                      <Link to={dropdownItem.path} key={index}>
                        <MenuItem
                          className={styles.dropdown_menu}
                          onClick={handleClose}
                        >
                          {dropdownItem.img}
                          {dropdownItem.text}
                        </MenuItem>
                      </Link>
                    );
                  })}
                </Menu>
              </React.Fragment>
            );
          })}
        </nav>
      </div>
      <div className={styles.right}>
        <>
          <Button
            id="fade-button"
            aria-controls={Boolean(profileOpen) ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={Boolean(profileOpen) ? "true" : undefined}
            onClick={(e) => setProfileOpen(e.currentTarget)}
          >
            <Typography variant="h6" className={styles.profile_text}>
              Вадим Александров
            </Typography>
            <ArrowDropDownIcon sx={{ fill: "rgba(0, 0, 0, 0.54)" }} />
          </Button>
          <Menu
            id="fade-menu"
            anchorEl={profileOpen}
            open={Boolean(profileOpen)}
            onClose={() => setProfileOpen(null)}
            className="hidden_profile_block"
          >
            <MenuItem onClick={handleLogOut}>
              <LogoutTwoToneIcon sx={{ mr: "12px" }} />
              Logout
            </MenuItem>
          </Menu>
        </>
      </div>
      {reportModal && <ReportModal setIsOpen={setReportModal} />}
      {returnModal && <ReturnModal setIsOpen={setReturnModal} />}
      {smenaModal && (
        <Modal title="F-Kacca" close={() => setSmenaModal(false)}>
          <div className="p20 pt0">
            <h3 className={styles.modalTitle}>
              ВЫ ТОЧНО ХОТИТЕ ОТКРЫТЬ СМЕНУ ???
            </h3>
            <div className="left-aligned">
              <Button variant="contained" style={{ marginRight: 10 }}>
                Да
              </Button>
              <Button
                variant="contained"
                className={styles.secondaryButtonMini}
              >
                Нет
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Header;
