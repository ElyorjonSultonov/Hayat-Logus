import { InputLabel, TextField, FormGroup, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { SubMenus } from "../../constants/menu";
import classes from "./index.module.scss";
import { ReactComponent as BookIcon } from "../../assets/icons/book.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/close-square.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-alt-2.svg";
import { ReactComponent as WalletIcon } from "../../assets/icons/wallet-money.svg";
import Modal from "../../components/modal";
// import FkassaRegistryContainer from "../../containers/fkassa/registry";
// import FKassaRegistryView from "../fKassa/registry";
// import BronTable from "../fKassa/tables";
import XMark from "../../assets/icons/xmark.svg";
import FKassaRegistryView from "../fKassa/registry";

const MainView = ({ setDirectoryModal, directoryModal }) => {
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
      field: "registerDate",
      headerName: "Время заезда",
      width: 113,
    },
    {
      field: "paid",
      headerName: "Оплачено",
      width: 105,
    },
    {
      field: "duration",
      headerName: "Длительность",
      width: 139,
    },
    {
      field: "tariff",
      headerName: "Тариф",
      width: 93,
    },
    {
      field: "packet",
      headerName: "Пакеты",
      width: 104,
    },
    {
      field: "discount",
      headerName: "Скидка",
      width: 104,
    },
    {
      field: "roomStatus",
      headerName: "Статус комнаты",
      width: 134,
    },
  ];

  const rows = [
    {
      id: 1,
      name: "Мохаммад Хошим Шовали",
      group: "3",
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
      registerDate: "17.05.2023",
      discount: 1000,
      roomStatus: "wefgb",
    },
  ];

  return (
    <div style={{ overflow: "scroll" }}>
      <FKassaRegistryView />

      <div className="search-bar">
        <div className="search-bar-left">
          <div className="text-search">
            <label>Поиск по тексту</label>
            <input type="text" />
          </div>
          <div className="teg-search">
            <label>Теги</label>
            <input type="text" />
          </div>
          <div className="detail-check">
            <input type="checkbox" />
            <label>Детализировать по гостям</label>
          </div>
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
          rows={rows}
          columns={columns}
          checkboxSelection
          disableRowSelectionOnClick
          disableColumnFilter
          disableColumnMenu
          disableVirtualization
          disableColumnSelector
          disableDensitySelector
        />
      </Box>
    </div>
  );
};

export default MainView;
