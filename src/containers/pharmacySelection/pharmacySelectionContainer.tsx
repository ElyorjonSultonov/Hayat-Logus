import React, { useState } from "react";
import useContextMenu from "../../hooks/useContextMenu";
import PharmacySelectionView from "../../views/pharmacySelection";

const PharmacySelectionContainer = () => {
  const { clicked, setClicked, points, setPoints } = useContextMenu();
  const [isOpen, setIsOpen] = useState(false);
  const [detailedView, setDetailedView] = useState(false);
  const handleContextMenu = (e) => {
    e.preventDefault();
    e.preventDefault();
    setClicked(true);
    setPoints({
      x: e.pageX,
      y: e.pageY,
    });
  };

  return (
    <PharmacySelectionView
      points={points}
      clicked={clicked}
      setIsOpen={setIsOpen}
      setDetailedView={setDetailedView}
      detailedView={detailedView}
      isOpen={isOpen}
      handleContextMenu={handleContextMenu}
    />
  );
};

export default PharmacySelectionContainer;
