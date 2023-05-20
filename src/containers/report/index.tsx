import {
  Autocomplete,
  Box,
  Button,
  FormGroup,
  InputLabel,
  TextField,
} from "@mui/material";
import React from "react";
import classes from "./index.module.scss";
import { ReactComponent as BookIcon } from "../../assets/icons/book.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/close-square.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-alt-2.svg";
import { ReactComponent as WalletIcon } from "../../assets/icons/wallet-money.svg";
import { ReactComponent as PrinterIcon } from "../../assets/icons/printer.svg";
import { MobileDatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";

const fakedata = [{ label: "The Shawshank Redemption", year: 1994 }];
const ReportContainer = () => {
  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs("2014-08-18T21:11:54")
  );

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };
  return (
    <div>
      <div className={classes.topBar}>
        <Box sx={{ width: "100%", display: "flex" }}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            sx={{ width: "100%", padding: "0 20px 0 10px" }}
            options={fakedata}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Отчёт по"
                placeholder="ОСТАТКИ ТОВАРОВ НА ДАТУ |"
              />
            )}
          />
          <Button
            className={`${classes.grayscale} ${classes.ml10}`}
            variant="contained"
          >
            <PrinterIcon />
            Печать
          </Button>
        </Box>
        <Box
          sx={{
            padding: "20px 0 20px 10px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ width: "26.2%" }}>
            <MobileDatePicker
              label="дата с"
              inputFormat="MM/DD/YYYY"
              className={classes.datePicker}
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
            <MobileDatePicker
              label="дата по"
              className={classes.datePicker}
              inputFormat="MM/DD/YYYY"
              value={value}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </Box>
          <Box sx={{ width: "66%", display: "flex" }}>
            <TextField
              sx={{ width: "100%" }}
              id="outlined-basic"
              placeholder="Организация"
              variant="outlined"
            />
            <Button
              className={`${classes.secondaryButton} ${classes.ml10}`}
              variant="contained"
            >
              <BookIcon />
            </Button>
          </Box>
          <Button
            className={`${classes.grayscale} ${classes.ml10}`}
            variant="contained"
          >
            <PrinterIcon />
            Печать
          </Button>
        </Box>
      </div>
      <div className={classes.content}>
        <div className={classes.form}>
          <FormGroup>
            <Box sx={{ paddingTop: "20px", marginBottom: "30px" }}>
              <InputLabel className={classes.label}>Филиал</InputLabel>
              <Box sx={{ display: "flex" }}>
                <TextField
                  className={classes.textField}
                  id="outlined-basic"
                  variant="outlined"
                />
                <Button
                  className={`${classes.secondaryButton} ${classes.ml10}`}
                  variant="contained"
                >
                  <BookIcon />
                </Button>
                <Button
                  className={`${classes.secondaryButton} ${classes.ml10}`}
                  variant="contained"
                >
                  <CloseIcon />
                </Button>
              </Box>
            </Box>
            <Box sx={{ marginBottom: "30px" }}>
              <InputLabel className={classes.label}>Перемещение</InputLabel>
              <Box sx={{ display: "flex" }}>
                <TextField
                  className={classes.textField}
                  id="outlined-basic"
                  variant="outlined"
                />
                <Button
                  className={`${classes.secondaryButton} ${classes.ml10}`}
                  variant="contained"
                >
                  <BookIcon />
                </Button>
                <Button
                  className={`${classes.secondaryButton} ${classes.ml10}`}
                  variant="contained"
                >
                  <SearchIcon />
                </Button>
                <Button
                  className={`${classes.secondaryButton} ${classes.ml10}`}
                  variant="contained"
                >
                  <WalletIcon />
                </Button>
              </Box>
            </Box>
            <Box sx={{ marginBottom: "30px" }}>
              <InputLabel className={classes.label}>Приходы</InputLabel>
              <Box sx={{ display: "flex" }}>
                <TextField
                  className={classes.textField}
                  id="outlined-basic"
                  variant="outlined"
                />
                <Button
                  className={`${classes.secondaryButton} ${classes.ml10}`}
                  variant="contained"
                >
                  <BookIcon />
                </Button>
                <Button
                  className={`${classes.secondaryButton} ${classes.ml10}`}
                  variant="contained"
                >
                  <SearchIcon />
                </Button>
                <Button
                  className={`${classes.secondaryButton} ${classes.ml10}`}
                  variant="contained"
                >
                  <WalletIcon />
                </Button>
              </Box>
            </Box>
            <Box sx={{ marginBottom: "30px" }}>
              <InputLabel className={classes.label}>
                Оптовая торговля
              </InputLabel>
              <Box sx={{ display: "flex" }}>
                <TextField
                  className={classes.textField}
                  id="outlined-basic"
                  variant="outlined"
                />
                <Button
                  className={`${classes.secondaryButton} ${classes.ml10}`}
                  variant="contained"
                >
                  <BookIcon />
                </Button>
                <Button
                  className={`${classes.secondaryButton} ${classes.ml10}`}
                  variant="contained"
                >
                  <SearchIcon />
                </Button>
                <Button
                  className={`${classes.secondaryButton} ${classes.ml10}`}
                  variant="contained"
                >
                  <WalletIcon />
                </Button>
              </Box>
            </Box>
            <Box sx={{ marginBottom: "30px" }}>
              <InputLabel className={classes.label}>
                Розничная торговля
              </InputLabel>
              <Box sx={{ display: "flex" }}>
                <TextField
                  className={classes.textField}
                  id="outlined-basic"
                  variant="outlined"
                />
                <Button
                  className={`${classes.secondaryButton} ${classes.ml10}`}
                  variant="contained"
                >
                  <BookIcon />
                </Button>
                <Button
                  className={`${classes.secondaryButton} ${classes.ml10}`}
                  variant="contained"
                >
                  <SearchIcon />
                </Button>
                <Button
                  className={`${classes.secondaryButton} ${classes.ml10}`}
                  variant="contained"
                >
                  <WalletIcon />
                </Button>
              </Box>
            </Box>
          </FormGroup>
        </div>
        <aside className={classes.table}>
          <table className={classes.tableBody}>
            <thead>
              <th></th>
              <th>Наименование</th>
              <th>Дата</th>
            </thead>
            <tr>
              <td></td>
              <td>Hayat Medical filial</td>
              <td>03.02.2023</td>
            </tr>
          </table>
        </aside>
      </div>
    </div>
  );
};

export default ReportContainer;
