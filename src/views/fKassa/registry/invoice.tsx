import React from "react";
import classes from "./index.module.scss";
import BackComponent from "../../../components/backComponent";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import { ReactComponent as BlankPage } from "../../../assets/icons/blank.svg";
import { ReactComponent as CheckIcon } from "../../../assets/icons/tick.svg";
import { ReactComponent as FilePencilIcon } from "../../../assets/icons/file-pencil.svg";
import { MobileDatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { ReactComponent as BookIcon } from "../../../assets/icons/book.svg";
import Table from "../../../components/table";
import invoices from "../../../repositories/data/invoices.json";

const FAptekaInvoiceView = () => {
  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs("2014-08-18T21:11:54")
  );

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };
  return (
    <div className={classes.invoice_wrapper}>
      <div className={classes.invoice_header}>
        <BackComponent title="Приход - Реестр">
          <div className={classes.header_content}>
            <div className={classes.headerActions}>
              <Button
                className={classes.button}
                startIcon={<BlankPage />}
                variant="contained"
              >
                Новый
              </Button>
              <Button
                className={classes.button}
                startIcon={<FilePencilIcon />}
                variant="contained"
              >
                Изменить
              </Button>
              <Button
                className={classes.button}
                startIcon={<CheckIcon />}
                variant="contained"
              >
                Активация
              </Button>
            </div>
            <div className={classes.headerActions}>
              <FormGroup row>
                <FormControlLabel control={<Checkbox />} label="Тип" />
                <FormControlLabel control={<Checkbox />} label="V" />
              </FormGroup>
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
            </div>
          </div>
        </BackComponent>
      </div>
      <nav className={classes.navbar}>
        <div className={classes.col}>
          <FormControlLabel control={<Checkbox />} label="Документ" />
          <TextField size="small" />
          <Button className={classes.button} variant="contained">
            <BookIcon />
          </Button>
        </div>
        <div className={classes.col}>
          <FormControlLabel control={<Checkbox />} label="Организация" />
          <TextField size="small" />
          <Button className={classes.button} variant="contained">
            <BookIcon />
          </Button>
        </div>
        <div className={classes.col}>
          <FormControlLabel control={<Checkbox />} label="Пользователь" />
          <TextField size="small" />
          <Button className={classes.button} variant="contained">
            <BookIcon />
          </Button>
        </div>
      </nav>
      <div className={classes.tableWrapper}>
        <Table className={classes.content}>
          <thead>
            <tr className={classes.tableHeader}>
              <th style={{ width: 40 }}></th>
              <th style={{ width: 84 }}></th>
              <th>ID</th>
              <th>Документ</th>
              <th>Дата</th>
              <th>Поставщик</th>
              <th>Сумма</th>
              <th>Пользователь</th>
              <th>Дата ввода</th>
            </tr>
          </thead>
          <tbody>
            {invoices.slice(0, 10).map((item) => (
              <tr>
                <td></td>
                <td>
                  <Checkbox
                    inputProps={{ "aria-label": "Checkbox demo" }}
                    defaultChecked
                  />
                </td>
                <td>{item.id}</td>
                <td>{item.document}</td>
                <td>{item.entry_date}</td>
                <td>{item.provider}</td>
                <td>{item.sum_retail}</td>
                <td>{item.user}</td>
                <td>{item.entry_date}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className={classes.tableWrapper}>
        <Table className={classes.content}>
          <thead>
            <tr className={classes.tableHeader}>
              <th style={{ width: 84 }}></th>
              <th>ID</th>
              <th>Наименование</th>
              <th>Серия</th>
              <th>Срок годности</th>
              <th>Количество</th>
              <th>Базовая цена</th>
              <th>Сумма</th>
              <th>Пользователь</th>
            </tr>
          </thead>
          <tbody>
            {invoices.slice(0, 10).map((item) => (
              <tr>
                <td>
                  <Checkbox
                    inputProps={{ "aria-label": "Checkbox demo" }}
                    defaultChecked
                  />
                </td>
                <td>{item.id}</td>
                <td>{item.document}</td>
                <td>{item.entry_date}</td>
                <td>{item.sum_discount}</td>
                <td>{item.provider}</td>
                <td>{item.sum_retail}</td>
                <td>{item.entry_date}</td>
                <td>{item.user}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default FAptekaInvoiceView;
