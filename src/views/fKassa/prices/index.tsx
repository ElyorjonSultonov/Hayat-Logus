import React from "react";
import "./index.css";
import {
  Autocomplete,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import Paper from "@mui/material/Paper";

function createData(
  first: string,
  second: number,
  third: number,
  fourth: number,
  fiveth: number,
  six: number,
  seven: number,
  eight: number,
  nine: number,
  ten: number
) {
  return { first, second, third, fourth, fiveth, six, seven, eight, nine, ten };
}

const rows = [
  createData(
    "СТД",
    200000,
    240000,
    280000,
    290000,
    290000,
    290000,
    300000,
    290000,
    290000
    // 29,
    // 29,
    // 29,
    // 29,
    // 29,
    // 29,
    // 29
  ),
  createData(
    "СОПР",
    200000,
    240000,
    280000,
    290000,
    290000,
    290000,
    300000,
    290000,
    290000
    // 29,
    // 29,
    // 29,
    // 29,
    // 29,
    // 29,
    // 29
  ),
  createData(
    "ПЛЮКС",
    200000,
    240000,
    280000,
    800000,
    800000,
    700000,
    300000,
    200000,
    400000
    // 29,
    // 29,
    // 29,
    // 29,
    // 29,
    // 29,
    // 29
  ),
  createData(
    "PEAHM",
    200000,
    240000,
    280000,
    290000,
    270000,
    500000,
    300000,
    290000,
    290000
    // 29,
    // 29,
    // 29,
    // 29,
    // 29,
    // 29,
    // 29
  ),
  createData(
    "ЭКОН",
    200000,
    240000,
    280000,
    290000,
    290000,
    290000,
    300000,
    290000,
    290000
    // 29,
    // 29,
    // 29,
    // 29,
    // 29,
    // 29,
    // 29
  ),
  createData(
    "ЛЮКС",
    200000,
    240000,
    280000,
    290000,
    290000,
    290000,
    300000,
    290000,
    290000
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
  { status: "СТД", count: "7+0" },
  { status: "СТД.К", count: "20+0" },
  { status: "ЛЮКСА", count: "3+0" },
  { status: "ЛЮКСА", count: "7+0" },
  { status: "ЛЮКСА.К", count: "22+0" },
  { status: "ЛЮКСБ", count: "18+0" },
  { status: "ЛЮКСБ.К", count: "10+0" },
  { status: "VIPA", count: "14+0" },
  { status: "VIPA.K", count: "12+0" },
  { status: "VIPБ", count: "10+0" },
  { status: "VIPБ.K", count: "8+0" },
  { status: "РЕАНИМ", count: "2+0" },
  { status: "РЕАНИМ.К", count: "1+0" },
];
// =============

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "Pulp Fiction", year: 1994 },
];

// discount =======

function disconts(one: number, two: number, three: number) {
  return { one, two, three };
}

const discount = [
  disconts(24.04, 600000, 0),
  disconts(25.04, 700000, 0),
  disconts(26.04, 800000, 0),
  disconts(27.04, 900000, 0),
  disconts(28.4, 500000, 0),
];

function RoomPrice() {
  return (
    <div className="room-prices">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: "100%" }} size="small">
          <TableHead>
            <TableRow>
              <TableCell>Тариф</TableCell>
              {dates.map((date, index) => (
                <TableCell key={index}>
                  <div className="table-date">
                    <span>{date.status}</span>
                    <span>{date.count}</span>
                  </div>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.first}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.first}
                </TableCell>
                <TableCell>{row.second}</TableCell>
                <TableCell>{row.third}</TableCell>
                <TableCell>{row.fourth}</TableCell>
                <TableCell>{row.fiveth}</TableCell>
                <TableCell>{row.six}</TableCell>
                <TableCell>{row.seven}</TableCell>
                <TableCell>{row.eight}</TableCell>
                <TableCell>{row.nine}</TableCell>
                <TableCell>{row.ten}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="discount">
        <div className="discount-top">
          <span>Скидка</span>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={top100Films}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="не предоставляется" />
            )}
          />
          <TableContainer component={Paper}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Дата</TableCell>
                  <TableCell align="right">Прожив.</TableCell>
                  <TableCell align="right">Пакет</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {discount.map((discount, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {discount.one}
                    </TableCell>
                    <TableCell align="right">{discount.two} so'm</TableCell>
                    <TableCell align="right">{discount.three}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className="discount-bottom">
          <input type="number" />
          <input type="number" />
        </div>
      </div>
    </div>
  );
}

export default RoomPrice;
