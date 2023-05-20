import React, { useState } from "react";
import MainView from "../../views/main";

const MainContainer = () => {
  const [directoryModal, setDirectoryModal] = useState(false);

  return (
    <MainView
      setDirectoryModal={setDirectoryModal}
      directoryModal={directoryModal}
    />
  );
};

export default MainContainer;
