import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";

import EditIcon from "../../../assets/icons/edit-icon.svg";
import SearchIcon from "../../../assets/icons/search-white.svg";
import XMark from "../../../assets/icons/xmark.svg";
import { useArrivalsQuery } from "../../../services/arrivalApi";

const columns = [
  { field: "id", headerName: "№", width: 71 },
  {
    field: "name",
    headerName: "Имя гостя",
    width: 305,
  },
  {
    field: "group",
    headerName: "Группа/Квота",
    width: 124,
  },
  {
    field: "dateCome",
    headerName: "Дата заезда",
    type: "number",
    width: 125,
  },
  {
    field: "dateGo",
    headerName: "Дата выезда",
    width: 129,
  },
  {
    field: "typeRoom",
    headerName: "Тип комнаты",
    width: 131,
  },
  {
    field: "room",
    headerName: "Комната",
    width: 97,
  },
  {
    field: "countUser",
    headerName: "Кол-во гостей",
    width: 136,
  },
  {
    field: "balance",
    headerName: "Баланс",
    width: 113,
  },
  {
    field: "paid",
    headerName: "Оплачено",
    width: 105,
  },
  {
    field: "tariff",
    headerName: "Тариф",
    width: 93,
  },
  {
    field: "duration",
    headerName: "Длительность",
    width: 139,
  },
  {
    field: "packet",
    headerName: "Пакеты",
    width: 104,
  },
];

const rows = [
  {
    id: 1,
    name: "Мохаммад Хошим Шовали",
    group: "",
    dateCome: "16.04.2023",
    dateGo: "23.04.2023",
    typeRoom: "PEAHM.K",
    room: 211.1,
    countUser: "1 взр.",
    balance: 46200000,
    paid: 0,
    tariff: "СТД",
    duration: "10 дней",
    packet: "ППЗМ, DS",
  },
];
// {
//   id: 2,
//   name: "Собирова Саида",
//   group: "",
//   dateCome: "15.04.2023",
//   dateGo: "23.04.2023",
//   typeRoom: "PEAHM.K",
//   room: 211.1,
//   countUser: "1 взр.",
//   balance: 46200000,
//   paid: 0,
//   tariff: "СТД",
//   duration: "10 дней",
//   packet: "ППЗМ, DS",
// },
// {
//   id: 3,
//   name: "Голубничая Любовь Порфиревна",
//   group: "",
//   dateCome: "15.04.2023",
//   dateGo: "23.04.2023",
//   typeRoom: "PEAHM.K",
//   room: 211.1,
//   countUser: "1 взр.",
//   balance: 46200000,
//   paid: 0,
//   tariff: "СТД",
//   duration: "10 дней",
//   packet: "ППЗМ, DS",
// },
// {
//   id: 4,
//   name: "Салихова Саима",
//   group: "",
//   dateCome: "15.04.2023",
//   dateGo: "23.04.2023",
//   typeRoom: "PEAHM.K",
//   room: 211.1,
//   countUser: "1 взр.",
//   balance: 46200000,
//   paid: 0,
//   tariff: "СТД",
//   duration: "10 дней",
//   packet: "ППЗМ, DS",
// },

function ResidentTable() {
  const {
    data: arrivals,
    isLoading,
    isSuccess,
    isError,
  } = useArrivalsQuery(arguments);
  const rowss =
    isSuccess &&
    arrivals.map((item) => {
      return {
        id: item.id,
        name: item.patients.f_name,
        group: "1",
        dateCome: item.patients.created_at,
        dateGo: item.patients.last_visit_at,
        typeRoom: item.room_price.room_type.name,
        room: item.room.room_number,
        balance: `${item.abs_price} sum`,
        paid: `${item.discount} sum`,
        tariff: item.room_price.tariff.name,
        duration:"10"
      };
    });
  let date = new Date("2023-05-31T16:29:39.742494+05:00");

  console.log(date);
  console.log(rowss)
  return (
    <div className="main-side">
      <div className="main-side-head">
        <h3>Проживающие</h3>
        <button>
          <img src={EditIcon} alt="icon" />
        </button>
      </div>
      <div className="search-bar">
        <div className="search-bar-left">
          <div className="text-search">
            <label>Поиск по тексту</label>
            <input className="searchInput" type="text" />
          </div>
          <div className="teg-search">
            <label>Теги</label>
            <input className="tagsInput" type="text" />
          </div>
          {/* <div className="detail-check">
            <input type="checkbox" />
            <label>Детализировать по гостям</label>
          </div> */}
        </div>
        <div className="search-bar-right">
          <button>
            <img src={SearchIcon} alt="icon" />
            Найти
          </button>
          <button>
            <img src={XMark} alt="icon" />
          </button>
        </div>
      </div>
      <Box sx={{ width: "100%", height: "70%" }}>
        <DataGrid
          rows={rowss}
          columns={columns}
          checkboxSelection
          disableRowSelectionOnClick
          disableColumnFilter
          disableColumnMenu
          // disableVirtualization
          disableColumnSelector
          disableDensitySelector
        />
      </Box>
    </div>
  );
}

export default ResidentTable;
