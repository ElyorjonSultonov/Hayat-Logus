import React from "react";
import Table from "../../../components/table";
import { Button, Checkbox, TextField } from "@mui/material";
import classes from "./cheque.module.scss";
import { MobileDatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { ReactComponent as CloseIcon } from "../../../assets/icons/close-square.svg";
const ChequeView = () => {
  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs("2014-08-18T21:11:54")
  );

  const handleChange2 = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

  return (
    <div>
      <div className={classes.header}>
        <TextField label="ЧЕК №" defaultValue={0} />
        <MobileDatePicker
          className={classes.datePicker}
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange2}
          renderInput={(params) => <TextField {...params} />}
        />
        <TextField label="Сумма" defaultValue={0} />
        <TextField label="Скидка" defaultValue={0} />
        <TextField label="К оплате" defaultValue={0} />
        <Button className={classes.secondaryButton} variant="outlined">
          {" "}
          <CloseIcon />
          Закрыть чек
        </Button>
        <Button className={classes.secondaryButton} variant="contained">
          {" "}
          <CloseIcon />
          Закрыть чек
        </Button>
      </div>
      <Table className={classes.table}>
        <thead>
          <tr>
            <th style={{ width: "40px" }}></th>
            <th style={{ width: "40px" }}></th>
            <th rowSpan={2} colSpan={2}>
              Полное наименование
            </th>
            <th rowSpan={2}>Кол-во</th>
            <th colSpan={1}>Цена</th>
            <th colSpan={1}>Сумма</th>
            <th rowSpan={2}>Приход</th>
            <th rowSpan={2}>Срок год.</th>
            <th rowSpan={2}>Серия</th>
            <th rowSpan={2}>MX</th>
          </tr>
          <tr>
            <th></th>
            <th></th>
            <th>Со скидкой</th>
            <th>Со скидкой</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>
              <Checkbox
                inputProps={{ "aria-label": "Checkbox demo" }}
                defaultChecked
              />
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
      <h1>devider</h1>
      <Table className={classes.table}>
        <thead>
          <tr>
            <th style={{ width: "40px" }}></th>
            <th style={{ width: "40px" }}></th>
            <th>Полное наименование</th>
            <th>Кол-во</th>
            <th>Цена</th>
            <th>Сумма</th>
            <th>Приход</th>
            <th>Срок год.</th>
            <th>Серия</th>
            <th>MX</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>
              <Checkbox
                inputProps={{ "aria-label": "Checkbox demo" }}
                defaultChecked
              />
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
export default ChequeView;
