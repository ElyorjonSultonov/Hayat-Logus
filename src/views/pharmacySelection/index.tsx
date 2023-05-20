import { Button, Checkbox, InputLabel, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import BackComponent from "../../components/backComponent";
import { ReactComponent as ArrowLeft } from "../../assets/icons/arrow-left.svg";
import classes from "./pharmacySelection.module.scss";
import Table from "../../components/table";
import goods from "../../repositories/data/goods.json";
import { IGoods } from "../../models/contants";
import ContextMenu from "../../components/context/ContextMenu";
import { DetailedViewModal, PharmacyDetailedModal } from "../../modals/modals";
import { useNavigate } from "react-router-dom";

const PharmacySelectionView = ({
  isOpen,
  handleContextMenu,
  setIsOpen,
  clicked,
  points,
  setDetailedView,
  detailedView
}) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const navigate = useNavigate();

  return (
    <div>
      <BackComponent title={"Подбор товара (Приход)"}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <InputLabel className={classes.headerLabel} htmlFor="shtrix_code">
            Штрих код
          </InputLabel>
          <TextField size="small" id="shtrix_code" />
          <Button onClick={() => navigate(-1)} className={classes.headerButton} variant="contained">
            <ArrowLeft />
            Сохранит и выйти
          </Button>
        </Box>
      </BackComponent>
      <div className={classes.myTable}>
        <Table >
          <thead className={classes.tableHead}>
            {[
              "",
              "Код",
              "Наименование",
              "Производитель",
              "Ед. измер",
              "Кол-уп",
              "Штриx код",
              "Рецепт",
              "Справ",
              "MX  ",
              "Fom.uz",
              "Группа FOM.uz",
              "Фикс.",
            ].map((item) => (
              <th key={item}>{item}</th>
            ))}
          </thead>
          <tbody>
            {goods.map((good: IGoods) => (
              <tr
                onClick={() => setIsOpen(true)}
                onContextMenu={handleContextMenu}
              >
                <td></td>
                <td>{good.code}</td>
                <td>{good.name}</td>
                <td>{good.manafacture}</td>
                <td>{good.measurements}</td>
                <td>{good.packs}</td>
                <td>{good.barcode}</td>
                <td>
                  <Checkbox {...label} defaultChecked={good.receipt} />
                </td>
                <td>
                  <Checkbox {...label} defaultChecked={good.sprav} />
                </td>
                <td>{good.mx}</td>
                <td>{good.fom}</td>
                <td>{good.fom_group}</td>
                <td>{good.fix}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <Table className={classes.content}>
        <thead>
          <tr className={classes.tableHeader}>
            <th rowSpan={2}></th>
            <th rowSpan={2}>ID</th>
            <th rowSpan={2}>Наименование</th>
            <th rowSpan={2}>Срок год.</th>
            <th rowSpan={2}>Кол-во</th>
            <th rowSpan={2}>Базовая Цена</th>
            <th colSpan={4} >Приходная</th>
            <th colSpan={2} >Со скидкой</th>
            <th rowSpan={2}>Наценка от</th>
            <th colSpan={5} >Розничная</th>
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
      {clicked && (
        <ContextMenu top={points.y} left={points.x}>
          <ul className={classes.contextMenu}>
            <li>
              <span>Выбрать</span>
              <span>Enter</span>
            </li>
            <li onClick={() => setDetailedView(true)}>
              <span>Новый</span>
              <span>Ins</span>
            </li>
            <li>
              <span>Обновить</span>
              <span>F5</span>
            </li>
            <li>
              <span>Штрихкод</span>
              <span>F7</span>
            </li>
            <li>
              <span>Фильтр</span>
              <span>F3</span>
            </li>
            <li>
              <span>Изменить</span>
              <span>Ctrl+ Enter</span>
            </li>
          </ul>
        </ContextMenu>
      )
      }
      {isOpen && <PharmacyDetailedModal setIsOpen={setIsOpen} />}
      {detailedView && <DetailedViewModal setIsOpen={setDetailedView} />}
    </div >
  );
};

export default PharmacySelectionView;
