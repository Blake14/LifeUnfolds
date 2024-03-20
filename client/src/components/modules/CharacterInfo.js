import React, { useState, useEffect } from 'react';
import { FaSave } from 'react-icons/fa';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { IoIosWarning } from 'react-icons/io';
import ParseAgeString from '../../functions/ParseAgeString';
import SubWarning from '../SubWarning';

const CharacterInfo = ({
	playerBirthDate,
	gameTime,
	formatDate,
	colors,
	playerData,
	calculateAge,
	updatePlayerData,
	setMessages,
	messages,
	age,
	settings,
	setSettings,
}) => {
	const [agePass, setAgePass] = useState(false);
	const ageLimitSetting =
		settings.find((s) => s.name === 'Age Limit to Change Name').value === 'Yes';

	useEffect(() => {
		const parsedAge = ParseAgeString(age);
		const isOldEnough = parsedAge.unit === 'year' && parsedAge.age >= 18;
		setAgePass(ageLimitSetting ? isOldEnough : true);
	}, [age, ageLimitSetting]);

	const [editFirstName, setEditFirstName] = useState(
		playerData[0].nameLog[0].firstName
	);
	const [editLastName, setEditLastName] = useState(
		playerData[0].nameLog[0].lastName
	);
	const [editNickName, setEditNickName] = useState(
		playerData[0].nickName || ''
	);
	const inputStyle = {
		padding: '8px',
		backgroundColor: colors.accent,
		color: colors.textHighlight,
		border: `1px solid ${colors.highlight}`,
		borderRadius: '4px',
		height: 40,
		marginBottom: 5,
	};

	const txtStyle = {
		color: colors.textHighlight,
		height: 25,
		marginTop: 10,
	};

	const lblStyle = {
		color: colors.textHighlight,
		width: 100,
	};

	const icnStyle = {
		fontSize: 24,
		marginLeft: 15,
		cursor: 'pointer',
	};

	const updateField = (field, value) => {
		if (agePass) {
			if (field === 'firstName' || field === 'lastName') {
				// Updating name log with the new name and appending a message
				const updatedNameLog = playerData[0].nameLog.map((entry, index) => {
					if (index === 0) {
						return { ...entry, [field]: value };
					}
					return entry;
				});
				updatePlayerData({ nameLog: updatedNameLog });
				setMessages([
					...messages,
					`You have legally changed your ${
						field === 'firstName' ? 'First Name' : 'Last Name'
					} to ${value}.`,
				]);
			}
		} else if (field === 'nickName') {
			// Updating nickname and appending a message
			updatePlayerData({ nickName: value });
			setMessages([...messages, `People will now call you ${value}.`]);
		}
	};

	return (
		<div
			style={{
				overflowY: 'scroll',
				height: '100%',
			}}
		>
			<label style={lblStyle}>First Name: </label>
			<input
				type='text'
				disabled={!agePass}
				style={
					agePass
						? inputStyle
						: {
								...inputStyle,
								cursor: 'not-allowed',
								backgroundColor: '#738290',
						  }
				}
				value={editFirstName}
				onChange={(e) => setEditFirstName(e.target.value)}
			/>

			<SubWarning
				agePass={agePass}
				updateField={updateField}
				editValue={editFirstName}
				icnStyle={icnStyle}
				fieldName='firstName'
				colors={colors}
			/>

			<br />
			<label style={lblStyle}>Last Name: </label>
			<input
				type='text'
				disabled={!agePass}
				style={
					agePass
						? inputStyle
						: {
								...inputStyle,
								cursor: 'not-allowed',
								backgroundColor: '#738290',
						  }
				}
				value={editLastName}
				onChange={(e) => setEditLastName(e.target.value)}
			/>
			<SubWarning
				agePass={agePass}
				updateField={updateField}
				editValue={editFirstName}
				icnStyle={icnStyle}
				fieldName='firstName'
				colors={colors}
			/>

			<br />
			<label style={lblStyle}>Nickname: </label>
			<input
				type='text'
				style={inputStyle}
				value={editNickName}
				onChange={(e) => setEditNickName(e.target.value)}
			/>
			<FaSave
				style={{ ...icnStyle, color: colors.textHighlight }}
				onClick={() => updateField('nickName', editNickName)}
			/>
			<br />

			<p style={txtStyle}>{`Birthdate: ${formatDate(playerBirthDate)}`}</p>
			<p style={txtStyle}>{`Age: ${calculateAge(
				playerBirthDate,
				gameTime
			)}`}</p>
		</div>
	);
};

export default CharacterInfo;
