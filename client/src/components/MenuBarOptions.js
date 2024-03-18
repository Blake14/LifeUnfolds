import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { FaGear } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
const MenuBarOptions = ({ colors, setCurrentPage }) => {
  const containerStyle = {
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%",
    margin: "0 auto",
  };

  // Styles likely to be applied to text within the button
  const buttonTextStyle = {
    color: colors.textHighlight,
    fontSize: "24px", // Text size can be adjusted
  };

  // Item style for dropdown items
  const itemStyle = {
    color: colors.text, // Text color for dropdown items
    //backgroundColor: colors.moduleBackground,
  };

  return (
    <div style={containerStyle}>
      <DropdownButton
        id="dropdown-file"
        variant="none"
        title={<span style={buttonTextStyle}>File</span>}
        align="end"
        data-bs-theme="dark"
      >
        <Dropdown.Item
          eventKey="1"
          style={itemStyle}
          onClick={() => setCurrentPage(0)}
        >
          <FaHome /> Home
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item
          eventKey="1"
          style={itemStyle}
          onClick={() => setCurrentPage(1)}
        >
          <FaGear /> General Settings
        </Dropdown.Item>
      </DropdownButton>

      <DropdownButton
        id="dropdown-character"
        variant="none"
        title={<span style={buttonTextStyle}>Character</span>}
        align="end"
        data-bs-theme="dark"
      >
        <Dropdown.Item eventKey="1" style={itemStyle}>
          Action
        </Dropdown.Item>
        <Dropdown.Item eventKey="2" style={itemStyle}>
          Another action
        </Dropdown.Item>
      </DropdownButton>

      <DropdownButton
        id="dropdown-simulate"
        variant="none"
        title={<span style={buttonTextStyle}>Simulate</span>}
        align="end"
        data-bs-theme="dark"
      >
        <Dropdown.Item eventKey="1" style={itemStyle}>
          Action
        </Dropdown.Item>
        <Dropdown.Item eventKey="2" style={itemStyle}>
          Another action
        </Dropdown.Item>
      </DropdownButton>
    </div>
  );
};

export default MenuBarOptions;
