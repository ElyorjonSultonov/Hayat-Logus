import React from "react";
import BackComponent from "../../components/backComponent";
import classes from "./registry.module.scss";

const MedicinesView = ({ selectMedicineHandler, selectedArray }) => {

    const data = {
        code: "1233",
        name: "ФУРОСЕМИД Р.Р 10МГ/МЛ 2МЛ АМП NE1O",
        manafacturer: "ДАЛЬХИМФАРМ, РОССИЯ",
        ed_izmer: "уп",
        number: "",
        ostatok: 123,
        price: 12312,
    };
    return (
        <div>
            <BackComponent title="Реестр лекарств - Информация о товаре" />
            <div className={classes.table}>
                <table className={classes.tableBody}>
                    <thead>
                        <th></th>
                        <th>Код</th>
                        <th>Наименование</th>
                        <th>Производитель</th>
                        <th>Ед. измер</th>
                        <th>№</th>
                        <th>Остаток</th>
                        <th>
                            Цена <br /> Розничная 1
                        </th>
                    </thead>
                    {new Array(5).fill(data).map((item, index) => (
                        <tr className={selectedArray.some(item => item.id === index) ? classes.active : null} onClick={() => selectMedicineHandler({ id: index })}>
                            <td >
                                <span></span>
                            </td>
                            <td>{item.code}</td>
                            <td>ФУРОСЕМИД Р.Р 10МГ/МЛ 2МЛ АМП NE1O</td>
                            <td>ДАЛЬХИМФАРМ, РОССИЯ</td>
                            <td>уп</td>
                            <td>50</td>
                            <td>03</td>
                            <td>0.00</td>
                        </tr>
                    ))}
                </table>
            </div>
            <div className={classes.table}>
                <table className={classes.tableBody}>
                    <thead>
                        <th ></th>
                        <th>Код</th>
                        <th>Наименование</th>
                        <th>Производитель</th>
                        <th>Ед. измер</th>
                        <th>№</th>
                        <th>Остаток</th>
                        <th>
                            Цена <br /> Розничная 1
                        </th>
                    </thead>
                    {new Array(selectedArray.length).fill(data).map((item) => (
                        <tr onClick={selectMedicineHandler}>
                            <td className={classes.active} ><span></span></td>
                            <td>{item.code}</td>
                            <td>ФУРОСЕМИД Р.Р 10МГ/МЛ 2МЛ АМП NE1O</td>
                            <td>ДАЛЬХИМФАРМ, РОССИЯ</td>
                            <td>уп</td>
                            <td>50</td>
                            <td>03</td>
                            <td>0.00</td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
    );
};

export default MedicinesView;
