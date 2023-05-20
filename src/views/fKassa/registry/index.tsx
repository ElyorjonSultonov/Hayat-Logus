import React from "react";
// import classes from "./index.module.scss";
// import { Link } from "react-router-dom";
// import DocumentSearch from "../../../assets/icons/file-search-alt.svg";
// import CartIncomeIcon from "../../../assets/icons/cart-income.svg";
// import PriceList from "../../../assets/icons/wallet.svg";
// import CaseIcon from "../../../assets/icons/briefcase-medical.svg";
// import { Box, Button, FormGroup, InputLabel, TextField } from "@mui/material";
// import { ReactComponent as BookIcon } from "../../../assets/icons/book.svg";
// import { ReactComponent as DocumentSearchIcon } from "../../../assets/icons/file-search-alt.svg";
// import { ReactComponent as SearchIcon } from "../../../assets/icons/search-alt-2.svg";
// import { ReactComponent as WalletIcon } from "../../../assets/icons/wallet-money.svg";
// import { ReactComponent as RefreshIcon } from "../../../assets/icons/refresh-2.svg";
// import { ReactComponent as CardIncomeIcon } from "../../../assets/icons/cart-income.svg";
// import { ReactComponent as UpdateIcon } from "../../../assets/icons/update.svg";
// import { ReactComponent as MoneyAddIcon } from "../../../assets/icons/money-add.svg";
// import { ReactComponent as CoinsIcon } from "../../../assets/icons/monent.svg";
// import { ReactComponent as Scalericon } from "../../../assets/icons/scaler.svg";
// import { ReactComponent as RulerIcon } from "../../../assets/icons/ruler1.svg";

// const menu = [
//   [
//     {
//       button: "Реестр",
//       icon: DocumentSearch,
//       path: "/fApteka/registry",
//     },
//     {
//       button: "Новый прИХоД",
//       icon: CartIncomeIcon,
//       path: "/fApteka/registry/create",
//     },
//   ],
//   [
//     {
//       button: "Реестр лекарств",
//       icon: CaseIcon,
//       path: "/fApteka/registry",
//     },
//     {
//       button: "Прайс ЛИСТ",
//       icon: PriceList,
//       path: "/fApteka/registry/create",
//     },
//   ],
// ];

import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
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
import EditIcon from "../../../assets/icons/edit-icon.svg";
import SearchIcon from "../../../assets/icons/search-white.svg";
import XMark from "../../../assets/icons/xmark.svg";

// =====================

import Bed from "../../../assets/icons/bed.svg";
import LeftRow from "../../../assets/icons/row-left.svg";
import RightRow from "../../../assets/icons/row-right.svg";

function FKassaRegistryView() {
  return (
    <div className="main-side">
      <div className="main-side-head">
        <div className="main-side-left">
          <h3>Ожидаемый заезд</h3>
          <div className="main-side-date">
            <button>
              <img src={LeftRow} alt="icon" />
            </button>
            <input type="date" />
            <button>
              <img src={RightRow} alt="icon" />
            </button>
          </div>
        </div>
        <div className="main-head-btns">
          <button>
            <img src={EditIcon} alt="icon" />
          </button>
          <button>
            <img src={Bed} alt="icon" />
          </button>
        </div>
      </div>

      {/* <div className="search-bar">
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
      </div> */}

      {/* <Box sx={{ width: "100%", height: "70%" }}>
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
      </Box> */}
    </div>
  );
}
export default FKassaRegistryView;
