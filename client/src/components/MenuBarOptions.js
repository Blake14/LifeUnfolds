import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { FaGear } from 'react-icons/fa6';
import { FaHome } from 'react-icons/fa';
import { MdTipsAndUpdates } from 'react-icons/md';
import { GiPirateGrave } from 'react-icons/gi';

const MenuBarOptions = ({ colors, setCurrentPage }) => {
	const [enableTooltips, setEnableTooltips] = useState(true); // Tooltip enabled state

	const containerStyle = {
		display: 'flex',
		justifyContent: 'space-evenly',
		width: '100%',
		margin: '0 auto',
	};

	const buttonTextStyle = {
		color: colors.textHighlight,
		fontSize: '24px',
	};

	const itemStyle = {
		color: colors.text,
	};

	// Function to toggle tooltips
	const toggleTooltips = () => {
		setEnableTooltips(!enableTooltips);
	};

	return (
		<div style={containerStyle}>
			<DropdownButton
				id='dropdown-file'
				variant='none'
				title={<span style={buttonTextStyle}>File</span>}
				align='end'
				data-bs-theme='dark'
			>
				<Dropdown.Item
					eventKey='1'
					style={itemStyle}
					onClick={() => setCurrentPage(0)}
				>
					<FaHome />
					&nbsp;&nbsp;&nbsp;Home
				</Dropdown.Item>
				<Dropdown.Divider />
				<Dropdown.Item
					eventKey='2'
					style={itemStyle}
					onClick={() => setCurrentPage(1)}
				>
					<FaGear />
					&nbsp;&nbsp;&nbsp;General Settings
				</Dropdown.Item>
				{/* Adding a new Dropdown item to toggle tooltips */}
				<Dropdown.Divider />
				<Dropdown.Item eventKey='3' style={itemStyle} onClick={toggleTooltips}>
					{enableTooltips ? (
						<span>
							<MdTipsAndUpdates />
							&nbsp;&nbsp;&nbsp;Enable Tooltips
						</span>
					) : (
						<span>
							<MdTipsAndUpdates />
							&nbsp;&nbsp;&nbsp;Disable Tooltips
						</span>
					)}
				</Dropdown.Item>
				<Dropdown.Divider />
				<Dropdown.Item eventKey='4' style={itemStyle}>
					<GiPirateGrave />
					&nbsp;&nbsp;&nbsp;Give Up
				</Dropdown.Item>
			</DropdownButton>

			{/* Other dropdown buttons remain unchanged */}
			<DropdownButton
				id='dropdown-character'
				variant='none'
				title={<span style={buttonTextStyle}>Character</span>}
				align='end'
				data-bs-theme='dark'
			>
				<Dropdown.Item eventKey='1' style={itemStyle}>
					Action
				</Dropdown.Item>
				<Dropdown.Item eventKey='2' style={itemStyle}>
					Another action
				</Dropdown.Item>
			</DropdownButton>

			<DropdownButton
				id='dropdown-simulate'
				variant='none'
				title={<span style={buttonTextStyle}>Simulate</span>}
				align='end'
				data-bs-theme='dark'
			>
				<Dropdown.Item eventKey='1' style={itemStyle}>
					Action
				</Dropdown.Item>
				<Dropdown.Item eventKey='2' style={itemStyle}>
					Another action
				</Dropdown.Item>
			</DropdownButton>
		</div>
	);
};

export default MenuBarOptions;
