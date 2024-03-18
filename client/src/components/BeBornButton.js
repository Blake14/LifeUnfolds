import React from "react";

const BeBornButton = ({
  colors,
  playerData,
  setCurrentPage,
  updatePlayerData,
}) => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Full viewport height
    width: "100vw",
    backgroundColor: colors.background, // Use the background color for consistency
  };

  const buttonStyle = {
    backgroundColor: colors.moduleBackground, // A prominent color for the button
    color: colors.textHighlight, // Text color for contrast
    fontSize: "24px", // Larger font size for prominence
    padding: "20px 40px", // Generous padding for a larger click area
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Subtle shadow for depth
    transition: "transform 0.1s ease", // Smooth transform on click
  };

  return (
    <div style={containerStyle}>
      <button
        style={buttonStyle}
        onClick={() => {
          updatePlayerData({
            nameLog: [{ firstName: "B", lastName: "McPherson" }],
          });
          setCurrentPage(0);
        }}
      >
        Be Born
      </button>
    </div>
  );
};

export default BeBornButton;
