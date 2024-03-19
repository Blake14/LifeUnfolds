import React, { useState } from 'react';
import { FaSave } from 'react-icons/fa';
import SubWarning from '../SubWarning';
import ParseAgeString from '../../functions/ParseAgeString';

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
}) => {
	let ageInt = 0;
	if (age) {
		ageInt = ParseAgeString(age);
	}
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
		if (ageInt >= 18) {
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
		<div>
			<label style={lblStyle}>First Name: </label>
			<input
				type='text'
				disabled={ageInt >= 18 ? false : true}
				style={
					ageInt >= 18
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

			<FaSave
				style={{
					...icnStyle,
					color: ageInt >= 18 ? colors.textHighlight : 'gray',
					cursor: ageInt >= 18 ? 'pointer' : 'not-allowed',
				}}
				onClick={() =>
					ageInt >= 18
						? updateField('firstName', editFirstName)
						: alert(
								'You must be at least 18 years old to legally change your name.'
						  )
				}
			/>
			<br />
			<SubWarning
				alertText={
					'You must be at least 18 years old to legally change your name.'
				}
				show={ageInt < 18}
				color={'#f06543'}
				size={10}
			/>
			<br />
			<label style={lblStyle}>Last Name: </label>
			<input
				type='text'
				disabled={ageInt >= 18 ? false : true}
				style={
					ageInt >= 18
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
			<FaSave
				style={{
					...icnStyle,
					color: ageInt >= 18 ? colors.textHighlight : 'gray',
					cursor: ageInt >= 18 ? 'pointer' : 'not-allowed',
				}}
				onClick={() =>
					ageInt >= 18
						? updateField('lastName', editLastName)
						: alert(
								'You must be at least 18 years old to legally change your name.'
						  )
				}
			/>
			<br />
			<SubWarning
				alertText={
					'You must be at least 18 years old to legally change your name.'
				}
				show={ageInt < 18}
				color={'#f06543'}
				size={10}
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
