import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import MedicinesView from "../../views/registry/medicines";
import IncomeView from "../../views/registry/income";
import OutcomeView from "../../views/registry/outcome";

const RegistryContainer = () => {
  const location = useLocation();
  const [selectedArray, setSelectedArray] = useState([{ id: 0 }]);
  const selectMedicineHandler = (item) => {
    if (selectedArray.every((i) => i?.id === item.id)) {
      setSelectedArray(selectedArray.splice(1, item.id));
      console.log("bor");
    } else {
      setSelectedArray([...selectedArray, item]);
    }
  };
  return (
    <div>
      {location.pathname === "/global/registry/medicines" && (
        <MedicinesView
          selectMedicineHandler={selectMedicineHandler}
          selectedArray={selectedArray}
        />
      )}
      {location.pathname === "/global/registry/outcome" && <OutcomeView />}
      {location.pathname === "/global/registry/income" && <IncomeView />}
    </div>
  );
};

export default RegistryContainer;
