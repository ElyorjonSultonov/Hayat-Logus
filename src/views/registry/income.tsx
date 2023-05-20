import React from "react";
import BackComponent from "../../components/backComponent";
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { ReactComponent as DocumentIcon } from "../../assets/icons/document-text.svg";
import { ReactComponent as RefreshIcon } from "../../assets/icons/refresh-2.svg";
import { ReactComponent as ExcelIcon } from "../../assets/icons/document-excel.svg";
import { ReactComponent as BookIcon } from '../../assets/icons/book.svg'
import { MobileDatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import invoices from '../../repositories/data/invoices.json';
import classes from "./registry.module.scss";
import Table from "../../components/table";

const IncomeView = () => {
    const [value, setValue] = React.useState<Dayjs | null>(
        dayjs("2014-08-18T21:11:54")
    );
    const modalHandler = () => {
        // setModal(true)
    }

    return (
        <div>
            <BackComponent title="Реестр прихода - Приходные накладные" />
            <div className={classes.header}>
                <div className={classes.incomeRightHeader}>
                    <Button className={classes.iconicButton}>
                        <DocumentIcon />
                    </Button>
                    <Button className={classes.iconicButton}>
                        <RefreshIcon />
                    </Button>
                    <Button className={classes.iconicButton}>
                        <ExcelIcon />
                    </Button>
                    <FormControlLabel
                        className={classes.mr90}
                        control={<Checkbox defaultChecked />}
                        label="Отдел"
                    />
                    <TextField sx={{ width: 400 }} />
                    <Button
                        className={`${classes.secondaryButton} ${classes.ml10}`}
                        variant="contained"
                        onClick={modalHandler}
                    >
                        <BookIcon />
                    </Button>
                    <FormControlLabel
                        control={<Checkbox />}
                        label="Введен"
                    />
                </div>
                <div className={classes.incomeLeftHeader}>
                    <Checkbox defaultChecked />
                    <MobileDatePicker
                        className={classes.datePicker}
                        inputFormat="MM/DD/YYYY"
                        value={value}
                        label="дата с"
                        onChange={(newValue: Dayjs | null) => {
                            setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    <MobileDatePicker
                        className={classes.datePicker}
                        inputFormat="MM/DD/YYYY"
                        label="дата по"
                        value={value}
                        onChange={(newValue: Dayjs | null) => {
                            setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </div>
            </div>
            <div className={classes.row}>
                <div className={classes.col}>
                    <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="Документ"
                    />
                    <TextField
                        size="small"
                    />
                    <Button
                        size="small"
                        className={`${classes.secondaryButton}  ${classes.w40}  ${classes.ml10}`}
                        variant="contained"
                    >
                        <BookIcon />
                    </Button>
                </div>
                <div className={classes.col}>
                    <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="Организация"
                    />
                    <TextField size="small" />
                    <Button
                        className={`${classes.secondaryButton}  ${classes.w40} ${classes.ml10}`}
                        variant="contained"
                    >
                        <BookIcon />
                    </Button>
                </div>
                <div className={classes.col}>
                    <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="Пользователь"
                    />
                    <TextField size="small" />
                    <Button
                        className={`${classes.secondaryButton} ${classes.ml10} ${classes.w40}`}
                        variant="contained"
                    >
                        <BookIcon />
                    </Button>
                </div>
            </div>
            <div className={classes.h400}>
                <Table className={classes.content}>
                    <thead>
                        <tr className={classes.tableHeader}>
                            <th rowSpan={2}></th>
                            <th rowSpan={2}></th>
                            <th rowSpan={2}>ID</th>
                            <th rowSpan={2}>Документ</th>
                            <th colSpan={2} >Счет фактура</th>
                            <th colSpan={2} >Накладная</th>
                            <th rowSpan={2}>Отсрочка</th>
                            <th rowSpan={2}>Поставщик</th>
                            <th colSpan={5} >Сумма</th>
                            <th rowSpan={2}>Пользователь</th>
                            <th rowSpan={2}>Дата ввода</th>
                            <th rowSpan={2}>Филиал</th>
                        </tr>
                        <tr>
                            <th>Дата</th>
                            <th>№</th>
                            <th>Дата</th>
                            <th>№</th>
                            <th>Прихода</th>
                            <th>Со скидкой</th>
                            <th>Со скидкой</th>
                            <th>Розничная 1</th>
                            <th>Цена с НДС</th>
                        </tr>
                    </thead>
                    <tbody>
                        {invoices.map((_, index) => (
                            <tr>
                                <td>

                                </td>
                                <td>
                                    &#x2713;
                                </td>
                                <td>{_.id}</td>
                                <td>{_.document}</td>
                                <td>{_.invoice_date}</td>
                                <td>{_.invoice_number}</td>
                                <td>{_.waybill_date}</td>
                                <td>{_.waybill_number}</td>
                                <td>{_.postponement}</td>
                                <td>{_.provider}</td>
                                <td>{_.sum_income}</td>
                                <td>{_.sum_discount}</td>
                                <td>{_.sum_retail}</td>
                                <td>{_.sum_retail_1}</td>
                                <td>{_.sum_nds}</td>
                                <td>{_.user}</td>
                                <td>{_.entry_date}</td>
                                <td>{_.branch}</td>
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
                        <th rowSpan={2} >Серия</th>
                        <th rowSpan={2} >Срок год.</th>
                        <th rowSpan={2}>Кол-во</th>
                        <th rowSpan={2}>Базовая
                            Цена</th>
                        <th colSpan={2} >Приходная</th>
                        <th rowSpan={2}>Наценка с</th>
                        <th colSpan={1}>Со скидкой</th>
                        <th colSpan={1}>Приходная</th>
                        <th colSpan={3}>Розничная</th>
                        <th colSpan={1}></th>
                    </tr>
                    <tr>
                        <th>Цена</th>
                        <th>Сумма</th>
                        <th>Сумма</th>
                        <th>Цена с НДС</th>
                        <th>%%%</th>
                        <th>Цена с НДС</th>
                        <th>Цена</th>
                        <th>Цена</th>
                    </tr>
                </thead>
                <tbody>
                    {invoices.map((_, index) => (
                        <tr>

                            <td>
                            </td>
                            <td>{_.id}</td>
                            <td>{_.document}</td>
                            <td>{_.invoice_date}</td>
                            <td>{_.invoice_number}</td>
                            <td>{_.waybill_date}</td>
                            <td>{_.waybill_number}</td>
                            <td>{_.postponement}</td>
                            <td>{_.provider}</td>
                            <td>{_.sum_income}</td>
                            <td>{_.sum_discount}</td>
                            <td>{_.sum_retail}</td>
                            <td>{_.sum_retail_1}</td>
                            <td>{_.sum_nds}</td>
                            <td>{_.user}</td>
                            <td>{_.sum_nds}</td>
                        </tr>
                    ))}

                </tbody>
            </Table>
        </div>
    );
};

export default IncomeView;
