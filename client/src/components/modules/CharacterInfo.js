import React from 'react';
import { MdModeEditOutline } from 'react-icons/md';

const CharacterInfo = ({ birthDate, gameTime, formatDate, colors }) => {
	const calculateAge = (birthDate, currentDate) => {
		let age = currentDate.getFullYear() - birthDate.getFullYear();
		const m = currentDate.getMonth() - birthDate.getMonth();

		if (m < 0 || (m === 0 && currentDate.getDate() < birthDate.getDate())) {
			age--;
		}

		return age;
	};
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
		width: 100,
	};
	const icnStyle = {
		fontSize: 24,
		marginLeft: 15,
		cursor: 'pointer',
	};
	return (
		<div>
			<label style={lblStyle}>First Name: </label> {` `}
			<input type='text' style={inputStyle} value={'Blake'} disabled />
			<MdModeEditOutline style={icnStyle} />
			<br />
			<label style={lblStyle}>Last Name: </label> {` `}
			<input type='text' style={inputStyle} value={'McPherson'} disabled />
			<MdModeEditOutline style={icnStyle} />
			<br />
			<label style={lblStyle}>Nickname: </label> {` `}
			<input type='text' style={inputStyle} value={'Genius'} disabled />
			<MdModeEditOutline style={icnStyle} />
			<p style={txtStyle}>{`Birthdate: ${formatDate(birthDate)}`}</p>
			<p style={txtStyle}>{`Age: ${calculateAge(birthDate, gameTime)}`}</p>
		</div>
	);
};

export default CharacterInfo;
