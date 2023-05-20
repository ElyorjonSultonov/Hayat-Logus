import React from "react";
import FKassaRegistryView from "../../../views/fKassa/registry";
import WaitingUser from "../../../assets/icons/waiting-user.svg";
import UserLock from "../../../assets/icons/user-lock.svg";
import SuitCase from "../../../assets/icons/suitcase.svg";
import MoneyCheck from "../../../assets/icons/money-check-dollar-pen.svg";
import Search from "../../../assets/icons/search-normal.svg";
import GridSearch from "../../../assets/icons/grid-search.svg";
import { useNavigate } from "react-router-dom";
import BronTable from "../../../views/fKassa/tables";

const FkassaRegistryContainer = () => {
  const navigate = useNavigate();

  return (
    <div className="hight main-section">
      <div className="sidebar">
        <div className="sidebar-main-btn">
          <button onClick={() => navigate("/global/bron")}>
            Создать бронь
          </button>
          <button>Мастер разделения</button>
          <button>Поселить без брони</button>
        </div>
        <div className="sidebar-btn">
          <button onClick={() => navigate("/global/branches")}>
            <img src={WaitingUser} alt="icon" />
            Ожидаемый заезд
          </button>
          <button onClick={() => navigate("/global/residents")}>
            <img src={UserLock} alt="icon" />
            Проживающие
          </button>
          <button>
            <img src={SuitCase} alt="icon" />
            Ожидаемый выезд
          </button>
          <button>
            <img src={MoneyCheck} alt="icon" />
            Неоплаченные
          </button>
          <button>
            <img src={Search} alt="icon" />
            Поиск
          </button>
          <button>
            <img src={GridSearch} alt="icon" />
            Наличие комнат
          </button>
        </div>
      </div>
      {/* <FKassaRegistryView /> */}
      {/* <BronTable /> */}
    </div>
  );
};

export default FkassaRegistryContainer;
// pages -> container -> view -> component
