import React from "react";
import CopyIcon from "../../../assets/icons/copy-icon.svg";
import TickIcon from "../../../assets/icons/tick-icon.svg";

import {
  Box,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  Typography,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import RoomPrice from "../prices";
import RoomsTable from "../rooms";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    "СТД",
    20,
    24,
    28,
    29
    // 29,
    // 29,
    // 30,
    // 29,
    // 29,
    // 29,
    // 29,
    // 29,
    // 29,
    // 29,
    // 29,
    // 29
  ),
  createData(
    "ПЛЮКСА.К",
    20,
    24,
    28,
    29
    // 29,
    // 29,
    // 30,
    // 29,
    // 29,
    // 29,
    // 29,
    // 29,
    // 29,
    // 29,
    // 29,
    // 29
  ),
  createData(
    "ЛЮКСБК",
    20,
    24,
    28,
    29
    // 29,
    // 29,
    // 30,
    // 29,
    // 29,
    // 29,
    // 29,
    // 29,
    // 29,
    // 29,
    // 29,
    // 29
  ),
  createData(
    "ЛЮКСА",
    20,
    24,
    28,
    29
    // 29,
    // 29,
    // 30,
    // 29,
    // 29,
    // 29,
    // 29,
    // 29,
    // 29,
    // 29,
    // 29,
    // 29
  ),
];

const dates = [
  { day: "24 апрель", week: "Пн" },
  { day: "26 апрель", week: "Вт" },
  { day: "27 апрель", week: "Ср" },
  { day: "28 апрель", week: "Чт" },
  { day: "29 апрель", week: "Пт" },
  { day: "30 апрель", week: "Сб" },
  { day: "01 май", week: "Вс" },
  { day: "02 май", week: "Пн" },
];

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function BronTable() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div className="order-date">
      <div className="main-side-head">
        <h3>Мастер бронирования</h3>
      </div>
      <div className="new-bron">
        <p>ФИО гостя</p>
        <div className="fio-input">
          <input type="text" />
          <img src={CopyIcon} alt="icon" />
        </div>
      </div>
      <Box sx={{ width: "100%", height: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              className="scheme "
              label="Схема размещения и сроки"
              {...a11yProps(0)}
            />
            <Tab
              className="rates"
              label="Тип комнаты и тарифы"
              {...a11yProps(1)}
            />
            <Tab className="room" label="Комната" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <div className="">
            <div className="bron-date-choose">
              <div className="period-date">
                <label>Кол-во</label>
                <input type="number" />
              </div>
              <div className="period-date">
                <label>Гости и размещение</label>
                <div className="room-count">
                  <label>Вэр.:</label>
                  <input type="number" />
                </div>
              </div>
              <div className="period-date">
                <label>Период проживания</label>
                <div className="room-count">
                  <input type="datetime-local" />
                  <input type="number" />
                  <label>дней по</label>
                  <input type="datetime-local" />
                </div>
              </div>
            </div>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: "100%" }} size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Тип комнаты</TableCell>
                    {dates.map((date, index) => (
                      <TableCell key={index}>
                        <div className="table-date">
                          <span>{date.day}</span>
                          <span>{date.week}</span>
                        </div>
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell>{row.calories}</TableCell>
                      <TableCell>{row.fat}</TableCell>
                      <TableCell>{row.carbs}</TableCell>
                      <TableCell>{row.protein}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <RoomPrice />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <RoomsTable />
        </TabPanel>
      </Box>
      <div className="order-bottom">
        <button>
          <img src={TickIcon} alt="icon" />
          Создать броНь
        </button>
        <button>Закрыть</button>
      </div>
    </div>
  );
}

export default BronTable;
