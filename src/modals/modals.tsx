import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Modal from "../components/modal";
import classes from "./modals.module.scss";
import { ReactComponent as BookIcon } from "../assets/icons/book.svg";
import { ReactComponent as CalculatorIcon } from "../assets/icons/calculator.svg";
import { ReactComponent as CloseIcon } from "../assets/icons/close-circle.svg";
import { ReactComponent as UpdateIcon } from "../assets/icons/refresh-2.svg";
import Table from "../components/table";
import { border, flexWrap, flexbox, padding } from "../constants/sx";

export const PharmacyDetailedModal = ({ setIsOpen }) => {
  return (
    <Modal
      styles={{ width: "98%" }}
      title="Tовар"
      close={() => setIsOpen(false)}
    >
      <div className={classes.detailedModal}>
        <div className={classes.form}>
          <Box sx={{ ...border, ...padding }}>
            <h3 style={border} className={classes.title}>
              1 ШПРИЦ 1МЛ GRAND\CHANGZHOU HUALIAN HEALTH, КИТАЙ
            </h3>
            <Box sx={flexbox}>
              <InputLabel className={classes.detailedInputLabel}>
                Тип наценки
              </InputLabel>
              <TextField fullWidth defaultValue={"02.01.2023"} />
              <Button className={`${classes.secondary} ${classes.ml10}`}>
                <BookIcon />
              </Button>
            </Box>
            <Box sx={flexbox}>
              <InputLabel className={classes.detailedInputLabel}>
                Кол-во
              </InputLabel>
              <Box sx={{ ...flexbox, width: "81%" }}>
                <TextField defaultValue={"0"} />+
                <TextField defaultValue={"0"} />/
                <TextField defaultValue={"1"} />
              </Box>
              <FormControlLabel
                control={<Checkbox />}
                label={
                  <Typography style={{ fontSize: "14px" }}>
                    Инвентаризация
                  </Typography>
                }
              />
            </Box>
            <Box sx={flexbox}>
              <Box sx={{ ...flexbox, width: "49%" }}>
                <InputLabel className={classes.detailedInputLabel}>
                  Цена базовая
                </InputLabel>
                <TextField fullWidth defaultValue={"0.00"} />
              </Box>
              <Box sx={{ ...flexbox, width: "49%" }}>
                <InputLabel className={classes.detailedInputLabel}>
                  Скидка %
                </InputLabel>
                <TextField fullWidth defaultValue={"0.00"} />
              </Box>
            </Box>
            <Box sx={flexbox}>
              <Box sx={{ ...flexbox, width: "49%" }}>
                <InputLabel className={classes.detailedInputLabel}>
                  Цена со скикой
                </InputLabel>
                <TextField fullWidth defaultValue={"0.00"} />
              </Box>
              <Box sx={{ ...flexbox, width: "49%" }}>
                <InputLabel className={classes.detailedInputLabel}>
                  Цена приходная
                </InputLabel>
                <TextField fullWidth defaultValue={"0.00"} />
              </Box>
            </Box>
            <Box sx={flexbox}>
              <Box sx={{ ...flexbox, width: "49%" }}>
                <InputLabel className={classes.detailedInputLabel}>
                  НДС Ставка
                </InputLabel>
                <TextField fullWidth defaultValue={"0.00"} />
              </Box>
              <Box sx={{ ...flexbox, width: "49%" }}>
                <InputLabel className={classes.detailedInputLabel}>
                  НДС Сумма
                </InputLabel>
                <TextField fullWidth defaultValue={"0.00"} />
              </Box>
            </Box>
            <Box sx={flexbox}>
              <Box sx={{ ...flexbox, width: "49%" }}>
                <InputLabel className={classes.detailedInputLabel}>
                  Сумма НДС
                </InputLabel>
                <TextField fullWidth defaultValue={"0.00"} />
              </Box>
              <Box sx={{ ...flexbox, width: "49%" }}>
                <InputLabel className={classes.detailedInputLabel}>
                  Цена с НДС
                </InputLabel>
                <TextField fullWidth defaultValue={"0.00"} />
              </Box>
            </Box>
            <Box sx={flexbox}>
              <FormGroup row>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Базовая"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Приходная"
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Приходная с НДС"
                />
              </FormGroup>
              <Button
                style={{ width: "max-content" }}
                className={classes.secondary}
              >
                <CalculatorIcon />
                Расчет
              </Button>
            </Box>
          </Box>
          <Box sx={border}>
            <Box sx={flexbox}>
              <Box sx={{ ...flexbox, width: "49%" }}>
                <InputLabel className={classes.detailedInputLabel}>
                  Цена базовая
                </InputLabel>
                <TextField fullWidth defaultValue={"0.00"} />
              </Box>
              <Box sx={{ ...flexbox, width: "49%" }}>
                <InputLabel className={classes.detailedInputLabel}>
                  Скидка %
                </InputLabel>
                <TextField fullWidth defaultValue={"0.00"} />
              </Box>
            </Box>
          </Box>
        </div>
        <Table className={classes.table}>
          <thead>
            <tr>
              <th rowSpan={2} colSpan={2}>
                Поставщик
              </th>
              <th rowSpan={2}>Дата</th>
              <th rowSpan={2}>Срок ГОДНОСТИ</th>
              <th rowSpan={2}>Серия</th>
              <th colSpan={1}>Цена</th>
              <th rowSpan={2}>%%% 1</th>
              <th colSpan={1}>Цена</th>
              <th rowSpan={2}>Приход</th>
              <th rowSpan={2}>Остаток</th>
              <th rowSpan={2}>Ориг</th>
              <th rowSpan={2}>ПЦ</th>
              <th rowSpan={2}>Дни</th>
              <th rowSpan={2}>Расxод</th>
            </tr>
            <tr>
              <th>Прихода</th>
              <th>Продажи 1</th>
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
            </tr>
          </tbody>
        </Table>
      </div>
    </Modal>
  );
};

export const SelectCatalogModal = ({ setIsOpen }) => {
  return (
    <Modal
      styles={{ width: "1056px" }}
      title="Выбор из справочника"
      close={() => setIsOpen(false)}
    >
      <div className={classes.selectionContent}>
        <table className={classes.table}>
          <thead>
            <th style={{ width: "36px" }}></th>
            <th>Наименование</th>
          </thead>
          {[
            "AERO PHARM GROUP",
            "Hayat Medical filial",
            "ACTY PHARMA",
            "2-ВАРИАНТ",
          ].map((item) => (
            <tr key={item}>
              <td style={{ width: "36px" }}></td>
              <td>{item}</td>
            </tr>
          ))}
        </table>
      </div>
    </Modal>
  );
};
export const OrganizerCardModal = ({ setIsOpen }) => {
  return (
    <Modal
      styles={{ width: "1056px", padding: "20px" }}
      title="Карточка организации"
      close={() => setIsOpen(false)}
    >
      <Box sx={flexWrap}>
        <TextField style={{ width: "18%" }} className={classes.TextField} />
        <TextField
          style={{ width: "80%" }}
          className={classes.TextField}
          label="Наименование"
        />
      </Box>
      <TextField
        fullWidth
        className={classes.TextField}
        label="Полное наименование"
      />
      <TextField fullWidth className={classes.TextField} label="Адрес" />
      <Box sx={flexWrap}>
        <TextField className={classes.miniTextField} label="МФО" />
        <TextField className={classes.miniTextField} label="Банк" />
        <TextField className={classes.miniTextField} label="Расчётный счёт" />
        <TextField className={classes.miniTextField} label="ИНН" />
        <TextField className={classes.miniTextField} label="Телефон" />
        <TextField className={classes.miniTextField} label="Факс" />
      </Box>
      <TextField className={classes.TextField} fullWidth label="e-mail" />
      <TextField className={classes.TextField} fullWidth label="оконХ" />
      <Box sx={flexWrap}>
        <TextField
          style={{ width: "45%" }}
          className={classes.miniTextField}
          label="Область"
        />
        <TextField
          style={{ width: "45%" }}
          className={classes.miniTextField}
          label="Район"
        />
        <Button
          style={{ marginBottom: "10px" }}
          variant="contained"
          className={`${classes.secondary}`}
        >
          <BookIcon />
        </Button>
        <TextField className={classes.miniTextField} label="Отсрочка" />
        <TextField className={classes.miniTextField} label="Предоплата" />
      </Box>
      <FormGroup row className={classes.checkboxGroup}>
        <FormControlLabel control={<Checkbox />} label="Поставщик" />
        <FormControlLabel control={<Checkbox />} label="Покупатель" />
        <FormControlLabel control={<Checkbox />} label="Страховка" />
      </FormGroup>
      <Box sx={{ display: "flex", justifyContent: "end", marginTop: "50px" }}>
        <Button variant="contained" className={classes.button}>
          Сохранить
        </Button>
        <Button
          variant="contained"
          onClick={() => setIsOpen(false)}
          className={`${classes.button} ${classes.secondary}`}
        >
          Отмена
        </Button>
      </Box>
    </Modal>
  );
};
export const DetailedViewModal = ({ setIsOpen }) => {
  return (
    <Modal close={() => setIsOpen(false)} title="Товар">
      nimadur
    </Modal>
  );
};
export const ReportModal = ({ setIsOpen }) => {
  return (
    <Modal close={() => setIsOpen(false)} title="Отчёт">
      <div style={{ padding: "10px", marginBottom: "20px" }}>
        <Table>
          <thead>
            <tr>
              <th></th>
              <th>Наименование</th>
              <th>Сумма</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>РОЗНЕЧНАЯ ПРОДАЖА</td>
              <td>0.00</td>
            </tr>
            <tr>
              <td></td>
              <td>Итого продаж</td>
              <td>0.00</td>
            </tr>
            <tr>
              <td></td>
              <td>Итого оплата долгов</td>
              <td>0.00</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className={classes.flexBetween}>
        <Button
          variant="contained"
          className={classes.secondaryButton}
          startIcon={<UpdateIcon />}
        >
          Обновить
        </Button>
        <Button
          onClick={() => setIsOpen(false)}
          variant="contained"
          className={classes.secondaryButton}
          startIcon={<CloseIcon />}
        >
          Выход
        </Button>
      </div>
    </Modal>
  );
};
export const ReturnModal = ({ setIsOpen }) => {
  return (
    <Modal
      styles={{ width: "700px" }}
      close={() => setIsOpen(false)}
      title="Возврат на склад"
    >
      <div className="p20 pt0">
        <h3 className={classes.modalTitle}>280 000,00</h3>
        <TextField
          fullWidth
          label="Название филиала"
          defaultValue={"Hayat medical main"}
        />
        <TextField className="mt10 mb20" fullWidth label="Примечание" />
        <div className="left-aligned">
          <Button variant="contained" style={{ marginRight: 10 }}>
            Возврат
          </Button>
          <Button
            variant="contained"
            onClick={() => setIsOpen(false)}
            className={classes.secondaryButton}
          >
            Отмена
          </Button>
        </div>
      </div>
    </Modal>
  );
};
