import { Button, Checkbox, InputLabel, TextField } from "@mui/material";
import { MobileDatePicker } from "@mui/x-date-pickers";
import React, { useState } from "react";
import BackComponent from "../../components/backComponent";
import dayjs, { Dayjs } from "dayjs";
import classes from "./index.module.scss";
import { Box } from "@mui/system";
import { ReactComponent as BookIcon } from "../../assets/icons/book.svg";
import { ReactComponent as UserIcon } from "../../assets/icons/profile.svg";
import { ReactComponent as AddUserIcon } from "../../assets/icons/adduser.svg";
import { ReactComponent as DocumentIcon } from "../../assets/icons/document-text.svg";
import { ReactComponent as AltDoneIcon } from "../../assets/icons/done-alt.svg";
import { Link } from "react-router-dom";
import { OrganizerCardModal, SelectCatalogModal } from "../../modals/modals";
import Table from "../../components/table";

const CreateIncome = () => {
  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs("2014-08-18T21:11:54")
  );
  const [catalog, setCatalog] = useState(false);
  const [organizer, setOrganizer] = useState(false);

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

  return (
    <div>
      <BackComponent title={"Приход - Приходная накладная"} />
      <div className={classes.toolbox}>
        <InputLabel className={classes.label}>Дата СФ</InputLabel>
        <MobileDatePicker
          className={classes.datePicker}
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
        <InputLabel className={classes.label}>№ СФ</InputLabel>
        <TextField />
        <InputLabel className={classes.label}>Дата </InputLabel>
        <MobileDatePicker
          className={classes.datePicker}
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
        <InputLabel className={classes.label}>№ накладной</InputLabel>
        <TextField />
        <InputLabel className={classes.label}>Отсрочка</InputLabel>
        <MobileDatePicker
          className={classes.datePicker}
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </div>
      <Box
        sx={{
          padding: "0 30px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ width: "48%", display: "flex" }}>
          <TextField
            className={classes.textField}
            id="outlined-basic"
            label="Документ"
            defaultValue="ПРИХОДА НА СКЛАД"
            variant="outlined"
          />
          <Button
            className={`${classes.secondaryButton} ${classes.ml10}`}
            variant="contained"
          >
            <BookIcon />
          </Button>
        </Box>
        <Box sx={{ width: "48%", display: "flex" }}>
          <TextField
            defaultValue="ALFA GIANT"
            className={classes.textField}
            id="outlined-basic"
            label="Организация"
            variant="outlined"
          />
          <Button
            className={`${classes.secondaryButton} ${classes.ml10}`}
            variant="contained"
            onClick={() => setCatalog(true)}
          >
            <UserIcon />
          </Button>
          <Button
            onClick={() => setOrganizer(true)}
            className={`${classes.secondaryButton} ${classes.ml10}`}
            variant="contained"
          >
            <AddUserIcon />
          </Button>
        </Box>
        <Box sx={{ width: "48%", display: "flex" }}>
          <TextField
            className={classes.textField}
            id="outlined-basic"
            label="Получатель"
            defaultValue={"HAYAT MEDICAL MAIN"}
            variant="outlined"
          />
          <Button
            className={`${classes.secondaryButton} ${classes.ml10}`}
            variant="contained"
          >
            <UserIcon />
          </Button>
        </Box>
        <Box sx={{ width: "48%", display: "flex" }}>
          <TextField
            className={classes.textField}
            id="outlined-basic"
            label="Примечание"
            defaultValue={"Текст для примечание"}
            variant="outlined"
          />
        </Box>
      </Box>
      <div className={classes.table}>
        <div className={classes.table_header}>
          <Link to="selection">
            <Button>
              <DocumentIcon />
              Подбор
            </Button>
          </Link>
          <Button>
            <AltDoneIcon />
            Активация
          </Button>
        </div>
        <link
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          rel="stylesheet"
        />

        <Table className={classes.content}>
          <thead>
            <tr className={classes.tableHeader}>
              <th rowSpan={2}></th>
              <th rowSpan={2}>ID</th>
              <th rowSpan={2}>Наименование</th>
              <th rowSpan={2}>Срок год.</th>
              <th rowSpan={2}>Кол-во</th>
              <th rowSpan={2}>Базовая Цена</th>
              <th colSpan={4}>Приходная</th>
              <th colSpan={2}>Со скидкой</th>
              <th rowSpan={2}>Наценка от</th>
              <th colSpan={5}>Розничная</th>
              <th rowSpan={2}>Пользователь</th>
              <th rowSpan={2}>Оригинал</th>
            </tr>
            <tr>
              <th>Цена</th>
              <th>Цена с НДС</th>
              <th>Сумма</th>
              <th>Сумма с НДС</th>
              <th>Цена</th>
              <th>Сумма</th>
              <th>%%%</th>
              <th>Цена</th>
              <th>Цена с НДС</th>
              <th>Сумма</th>
              <th>Сумма с НДС</th>
            </tr>
          </thead>
          <tbody>
            <tr>
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
              <td></td>
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
      </div>
      {catalog && <SelectCatalogModal setIsOpen={() => setCatalog(false)} />}
      {organizer && (
        <OrganizerCardModal setIsOpen={() => setOrganizer(false)} />
      )}
    </div>
  );
};

export default CreateIncome;
