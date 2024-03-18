import React from 'react';
import { Settings } from '../data/Settings';

const GeneralSetting = ({ colors, setCurrentPage }) => {
	const btnStyles = {
		color: colors.textHighlight,
		backgroundColor: colors.moduleBackground,
		border: 'none',
		padding: '10px 20px',
		cursor: 'pointer',
		marginBottom: '20px',
		marginRight: '10px',
		borderRadius: '8px',
		fontSize: '14px',
		boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
	};

	const settingsContainerStyle = {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
	};

	const settingStyle = {
		width: 'calc(33% - 10px)',
		marginBottom: '20px',
	};

	const inputStyle = {
		width: '100%',
		padding: '8px',
		backgroundColor: colors.accent,
		color: colors.textHighlight,
		border: `1px solid ${colors.highlight}`,
		borderRadius: '4px',
		height: 40,
	};

	const labelStyle = {
		color: colors.textHighlight,
		display: 'block',
		marginBottom: '5px',
		fontWeight: 'bold',
	};

	// Enhanced function to render inputs or selects based on the setting type
	const renderSettingInput = (setting) => {
		switch (setting.type) {
			case 'input':
				return (
					<input
						type='number'
						style={inputStyle}
						defaultValue={setting.default}
						min={setting.min}
						max={setting.max}
						placeholder={setting.placeholder}
					/>
				);
			case 'select':
				return (
					<select style={inputStyle} defaultValue={setting.value}>
						{setting.options.map((option) => (
							<option key={option} value={option}>
								{option}
							</option>
						))}
					</select>
				);
			default:
				return null;
		}
	};

	return (
		<div
			style={{
				backgroundColor: colors.background,
				color: colors.text,
				height: '100%',
				width: '100%',
				overflow: 'auto',
				padding: '20px',
			}}
		>
			<div
				style={{
					display: 'flex',
					justifyContent: 'left',
					alignItems: 'center',
				}}
			>
				<button onClick={() => setCurrentPage(0)} style={{ ...btnStyles }}>
					Back
				</button>
				<button style={{ ...btnStyles, backgroundColor: '#f09d51' }}>
					Reset
				</button>
			</div>

			<div style={{ ...settingsContainerStyle }}>
				<h2 style={{ color: colors.textHighlight, width: '100%' }}>
					General Settings
				</h2>
				{Settings.map((setting, index) => (
					<div key={index} style={{ ...settingStyle }}>
						<label style={{ ...labelStyle }}>{setting.name}</label>
						{renderSettingInput(setting)}
					</div>
				))}
			</div>
		</div>
	);
};

export default GeneralSetting;
