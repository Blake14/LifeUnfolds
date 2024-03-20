import React, { useState } from 'react';

const GeneralSetting = ({ colors, setCurrentPage, setSettings, settings }) => {
	const handleChange = (index, value) => {
		setSettings((prevSettings) => {
			return prevSettings.map((setting, i) => {
				if (i === index) {
					return { ...setting, value: value };
				}
				return setting;
			});
		});
	};

	const btnStyles = {
		color: colors.textHighlight,
		backgroundColor: colors.moduleBackground,
		border: 'none',
		padding: '10px 20px',
		cursor: 'pointer',
		margin: '20px',
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
	const renderSettingInput = (setting, index) => {
		switch (setting.type) {
			case 'input':
				return (
					<input
						type='number'
						style={inputStyle}
						value={setting.value}
						min={setting.min}
						max={setting.max}
						placeholder={setting.placeholder}
						onChange={(e) => handleChange(index, e.target.value)}
					/>
				);
			case 'select':
				return (
					<select
						style={inputStyle}
						value={setting.value}
						onChange={(e) => handleChange(index, e.target.value)}
					>
						{setting.options.map((option) => (
							<option key={option} value={option}>
								{option}
							</option>
						))}
					</select>
				);
				value: return null;
		}
	};

	return (
		<div
			style={{
				padding: 20,
				overflowY: 'scroll',
			}}
		>
			<div>
				<button onClick={() => setCurrentPage(0)} style={btnStyles}>
					Back
				</button>
				<button style={{ ...btnStyles, backgroundColor: '#f09d51' }}>
					Reset
				</button>
			</div>

			<div style={settingsContainerStyle}>
				<h2 style={{ color: colors.textHighlight, width: '100%' }}>
					General Settings
				</h2>
				{settings.map((setting, index) => (
					<div key={index} style={settingStyle}>
						<label style={labelStyle}>{setting.name}</label>
						{renderSettingInput(setting, index)}
					</div>
				))}
			</div>
		</div>
	);
};

export default GeneralSetting;
