import React from "react";
import classes from "./purchase.module.scss";
import BackComponent from "../../../components/backComponent";
import dayjs, { Dayjs } from "dayjs";
import { MobileDatePicker } from "@mui/x-date-pickers";
import { Button, InputLabel, TextField } from "@mui/material";
import { ReactComponent as BookIcon } from "../../../assets/icons/book.svg";
import { ReactComponent as UserIcon } from "../../../assets/icons/users2.svg";
import { ReactComponent as UserAddIcon } from "../../../assets/icons/adduser.svg";

const PurchaseInvoiceView = () => {
  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs("2014-08-18T21:11:54")
  );

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };
  return (
    <div className={classes.wrapper}>
      <BackComponent title="Приход - Приходная накладная"></BackComponent>
      <div className={classes.filter}>
        <InputLabel>Дата СФ</InputLabel>
        <MobileDatePicker
          className={classes.datePicker}
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
        <InputLabel>№ СФ</InputLabel>
        <TextField />
        <InputLabel>Дата </InputLabel>
        <MobileDatePicker
          className={classes.datePicker}
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
        <InputLabel>№ накладной</InputLabel>
        <TextField />
        <InputLabel>Отсрочка </InputLabel>
        <MobileDatePicker
          className={classes.datePicker}
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
        <InputLabel>% Предоплаты </InputLabel>
        <TextField />
      </div>
      <div className={classes.filter}>
        <TextField label="Документ" defaultValue={"ПРИХОДА НА СКЛАД"} />
        <Button variant="contained" className={classes.secondaryButton}>
          <BookIcon />
        </Button>
        <TextField label="Организация" defaultValue={"ALFA GIANT"} />
        <Button variant="contained" className={classes.secondaryButton}>
          <UserIcon />
        </Button>
        <Button variant="contained" className={classes.secondaryButton}>
          <UserAddIcon />
        </Button>
        <TextField label="Получатель" defaultValue={"HAYAT MEDICAL MAIN"} />
        <Button variant="contained" className={classes.secondaryButton}>
          <UserIcon />
        </Button>
      </div>
    </div>
  );
};

export default PurchaseInvoiceView;
