import React from 'react';

const CharacterInfo = ({ birthDate, gameTime, formatDate }) => {
	const calculateAge = (birthDate, currentDate) => {
		let age = currentDate.getFullYear() - birthDate.getFullYear();
		const m = currentDate.getMonth() - birthDate.getMonth();

		if (m < 0 || (m === 0 && currentDate.getDate() < birthDate.getDate())) {
			age--;
		}

		return age;
	};
	return (
		<div>
			<p>{`Birthdate: ${formatDate(birthDate)}`}</p>
			{`Age: ${calculateAge(birthDate, gameTime)}`}
		</div>
	);
};

export default CharacterInfo;
