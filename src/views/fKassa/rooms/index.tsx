import React from "react";
import "./index.css";
import { Autocomplete, Table, TableContainer, TextField } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import XMark from "../../../assets/icons/xmark.svg";

function createData(
  number: number,
  dateFrom: number,
  dateTo: number,
  gender: string,
  wight: number,
  type: string,
  korpus: string,
  etaj: string,
  cleaningStatus: string,
  cleaningVid: string,
  fulled: string,
  comments: string,
  countUsed: number
) {
  return {
    number,
    dateFrom,
    dateTo,
    gender,
    wight,
    type,
    korpus,
    etaj,
    cleaningStatus,
    cleaningVid,
    fulled,
    comments,
    countUsed,
  };
}

const rows = [
  createData(
    202.1,
    15,
    6.0,
    "M",
    4.0,
    "ЖИЛ",
    "ГК",
    "ГК2",
    "Грязный",
    "",
    "",
    "",
    132
  ),
  createData(
    203.1,
    237,
    9.0,
    "M",
    4.3,
    "ЖИЛ",
    "ГК",
    "ГК2",
    "Грязный",
    "",
    "",
    "",
    132
  ),
  createData(
    204.1,
    262,
    16.0,
    "M",
    6.0,
    "ЖИЛ",
    "ГК",
    "ГК2",
    "Грязный",
    "",
    "",
    "",
    132
  ),
  createData(
    205.1,
    305,
    3.7,
    "M",
    4.3,
    "ЖИЛ",
    "ГК",
    "ГК2",
    "Грязный",
    "",
    "",
    "",
    132
  ),
  createData(
    206.1,
    356,
    16.0,
    "M",
    3.9,
    "ЖИЛ",
    "ГК",
    "ГК2",
    "Грязный",
    "",
    "",
    "",
    132
  ),
];

function RoomsTable() {
  // Autocomplete ====
  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
  ];
  return (
    <div className="rooms">
      <div className="rooms-top">
        <div className="rooms-filter">
          <label>Расположение</label>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} />}
          />
        </div>
        <div className="rooms-filter">
          <label>Вид</label>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} />}
          />
        </div>
        <div className="rooms-filter">
          <label>Теги</label>
          <input type="text" />
        </div>
        <button className="xMark">
          <img src={XMark} alt="icon" />
        </button>
      </div>

      <div className="rooms-table">
        <TableContainer component={Paper}>
          <Table size="small" aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Комната</TableCell>
                <TableCell align="right">Дата выезда</TableCell>
                <TableCell align="right">Дата заезда</TableCell>
                <TableCell align="right">Пол</TableCell>
                <TableCell align="right">Возраст</TableCell>
                <TableCell align="right">Вид</TableCell>
                <TableCell align="right">Корпус</TableCell>
                <TableCell align="right">Этаж</TableCell>
                <TableCell align="right">Статус уборки</TableCell>
                <TableCell align="right">Вид уборки</TableCell>
                <TableCell align="right">Занят?</TableCell>
                <TableCell align="right">Комментарии</TableCell>
                <TableCell align="right">K-во использований</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.number}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.number}
                  </TableCell>
                  <TableCell align="right">{row.dateFrom}</TableCell>
                  <TableCell align="right">{row.dateTo}</TableCell>
                  <TableCell align="right">{row.gender}</TableCell>
                  <TableCell align="right">{row.wight}</TableCell>
                  <TableCell align="right">{row.type}</TableCell>
                  <TableCell align="right">{row.korpus}</TableCell>
                  <TableCell align="right">{row.etaj}</TableCell>
                  <TableCell align="right">{row.cleaningStatus}</TableCell>
                  <TableCell align="right">{row.cleaningVid}</TableCell>
                  <TableCell align="right">{row.fulled}</TableCell>
                  <TableCell align="right">{row.comments}</TableCell>
                  <TableCell align="right">{row.countUsed}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div className="table-bottom">
          <span>Количество = 37</span>
          <span>К-во гостей: 17 взр. </span>
        </div>
      </div>
    </div>
  );
}

export default RoomsTable;
