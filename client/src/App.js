import React, { useState, useEffect } from "react";
import GameTimeUpdater from "./functions/GameTimeUpdater";
import Form from "react-bootstrap/Form";
import { BiPlay, BiPause } from "react-icons/bi";
import Pointer from "./components/Pointer";
import MenuBarOptions from "./components/MenuBarOptions";

const App = () => {
  const colors = {
    background: "#353535",
    text: "#D9D9D9",
    moduleBackground: "#3C6E71",
    textHighlight: "#FFFFFF",
    accent: "#284B63",
    highlight: "#FFD700", // Gold color for highlighting elements like buttons or important text
    activeIcon: "#FFD700", // Active icon color
    inactiveIcon: "#B1B1B1", // Inactive icon color
  };
  const [selectedIndices, setSelectedIndices] = useState(
    Array.from({ length: 8 }, () => 0)
  );

  const timeUnitOptions = ["second", "minute", "hour", "day", "month", "year"];
  const [currentPage, setCurrentPage] = useState(0);
  // 0 = Home, 1 = Settings
  useEffect(() => {
    document.body.style.backgroundColor = colors.background;
    document.body.style.color = colors.text;
    document.body.style.margin = "0";
    document.body.style.fontFamily = "Arial, sans-serif";
  }, [colors]);
  const [birthDate, setBirthDate] = useState(new Date(1995, 11, 21, 0, 0, 0));
  const [gameTime, setGameTime] = useState(new Date(1995, 11, 21, 0, 0, 0)); // Blank Date 2024, 0, 1, 0, 0, 0
  const [gamePaused, setGamePaused] = useState(false);
  const [timeMultiplier, setTimeMultiplier] = useState({
    value: 1,
    unit: "minute",
  });

  const formatDate = (date) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    return date.toLocaleDateString("en-US", options);
  };

  const handleSelectChange = (event) => {
    setTimeMultiplier({ ...timeMultiplier, unit: event.target.value });
  };

  const [attributes, setAttributes] = useState([
    {
      id: 1,
      name: "Energy",
      description: "Represents the character's physical vitality and stamina.",
      value: 100,
    },
    {
      id: 2,
      name: "Social",
      description:
        "Indicates the character's social connections and satisfaction from interactions.",
      value: 100,
    },
    {
      id: 3,
      name: "Hunger",
      description:
        "Measures the need for sustenance and the effects of eating or starvation.",
      value: 0,
    },
    {
      id: 4,
      name: "Hope",
      description:
        "Reflects the character's optimism and motivation to achieve goals.",
      value: 100,
    },
    {
      id: 5,
      name: "Health",
      description:
        "Overall physical well-being, affected by various factors like diet, rest, stress, and injuries.",
      value: 100,
    },
    {
      id: 6,
      name: "Sanity",
      description:
        "Indicates the character's psychological health, influenced by factors like stress, achievements, and social interactions.",
      value: 100,
    },
    {
      id: 8,
      name: "Morale",
      description:
        "The character's current spirits or mood, influencing performance and interactions.",
      value: 100,
    },
    {
      id: 9,
      name: "Fatigue",
      description:
        "Measures the level of tiredness, affecting energy and the likelihood of mistakes or accidents.",
      value: 0,
    },
    {
      id: 10,
      name: "Hydration",
      description:
        "Essential for survival and performance, reflecting the need for water intake.",
      value: 100,
    },
  ]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden", // Prevent scrolling on the main page
      }}
    >
      <GameTimeUpdater
        gameTime={gameTime}
        setGameTime={setGameTime}
        timeMultiplier={timeMultiplier}
        gamePaused={gamePaused}
        setAttributes={setAttributes}
        attributes={attributes}
      />
      <div
        style={{
          backgroundColor: colors.moduleBackground,
          color: colors.textHighlight,
          padding: "10px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>{formatDate(gameTime)}</div>
        <MenuBarOptions setCurrentPage={setCurrentPage} colors={colors} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Form.Select
            aria-label="Time unit selector"
            value={timeMultiplier.unit}
            onChange={handleSelectChange}
            style={{
              marginRight: "10px",
              color: colors.textHighlight,
              backgroundColor: colors.accent,
              borderColor: colors.highlight,
            }}
          >
            {timeUnitOptions.map((opt) => (
              <option
                key={opt}
                value={opt}
                style={{
                  color: colors.text,
                  backgroundColor: colors.background,
                }}
              >
                {opt.charAt(0).toUpperCase() + opt.slice(1)}
              </option>
            ))}
          </Form.Select>
          <div
            style={{
              width: 250,
              fontSize: 37,
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <BiPlay
              style={{
                cursor: "pointer",
                color: !gamePaused ? colors.highlight : colors.text,
                marginRight: "10px",
              }}
              onClick={() => setGamePaused(false)}
            />
            <BiPause
              style={{
                cursor: "pointer",
                color: gamePaused ? colors.highlight : colors.text,
              }}
              onClick={() => setGamePaused(true)}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          overflow: "hidden",
        }}
      >
        <Pointer
          colors={colors}
          birthDate={birthDate}
          gameTime={gameTime}
          formatDate={formatDate}
          attributes={attributes}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setSelectedIndices={setSelectedIndices}
          selectedIndices={selectedIndices}
        />
      </div>
    </div>
  );
};

export default App;
