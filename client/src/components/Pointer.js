import React from "react";
import ModuleContainer from "./modules/ModuleContainer";
import GeneralSetting from "./GeneralSetting";
import BeBornButton from "./BeBornButton";

const Pointer = ({
  colors,
  birthDate,
  gameTime,
  formatDate,
  attributes,
  currentPage,
  setCurrentPage,
  setSelectedIndices,
  selectedIndices,
  setGamePaused,
  playerData,
  updatePlayerData,
}) => {
  if (currentPage === 99 || playerData[0].nameLog[0].firstName === "No") {
    setGamePaused(true);
    return (
      <div>
        <BeBornButton
          colors={colors}
          setCurrentPage={setCurrentPage}
          playerData={playerData}
          updatePlayerData={updatePlayerData}
        />
      </div>
    );
  } else if (currentPage === 0) {
    return (
      <ModuleContainer
        colors={colors}
        birthDate={birthDate}
        gameTime={gameTime}
        formatDate={formatDate}
        attributes={attributes}
        setSelectedIndices={setSelectedIndices}
        selectedIndices={selectedIndices}
        playerData={playerData}
      />
    );
  } else if (currentPage === 1) {
    setGamePaused(true);
    return (
      <GeneralSetting
        colors={colors}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    );
  } else {
    return <div>Page Not Found</div>;
  }
};

export default Pointer;
