import React, { useState } from 'react';
import GenerateRandomName from '../functions/GenerateRandomName';
import GenerateBirthdate from '../functions/GenerateBirthdate';

const BeBornButton = ({
	colors,
	setCurrentPage,
	updatePlayerData,
	setMessages,
	messages,
	setGameTime,
}) => {
	const [enableTooltips, setEnableTooltips] = useState(true);

	const containerStyle = {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100vh',
		width: '100vw',
		backgroundColor: colors.background,
	};

	const buttonStyle = {
		backgroundColor: colors.moduleBackground,
		color: colors.textHighlight,
		fontSize: '24px',
		padding: '20px 40px',
		border: 'none',
		borderRadius: '8px',
		cursor: 'pointer',
		boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
		transition: 'transform 0.1s ease',
	};

	const labelStyle = {
		display: 'inline-block',
		color: colors.textHighlight,
		cursor: 'pointer',
		marginLeft: '10px',
	};

	const checkboxStyle = {
		appearance: 'none',
		backgroundColor: enableTooltips ? colors.highlight : 'transparent',
		border: `2px solid ${colors.textHighlight}`,
		padding: '5px',
		display: 'inline-block',
		position: 'relative',
		top: '2px',
		borderRadius: '3px',
		cursor: 'pointer',
		marginRight: '5px',
	};

	const handleBeBornClick = () => {
		const charFirstName = GenerateRandomName('first');
		const dadFirstName = GenerateRandomName('first');
		const momFirstName = GenerateRandomName('first');
		const famLastName = GenerateRandomName('last');

		const birthday = GenerateBirthdate();

		// Using setGameTime directly with the birthday object, which should have correct local time.
		setGameTime(birthday);

		// Creating a local date string that doesn't convert to UTC
		const birthDateString =
			[
				birthday.getFullYear(),
				('0' + (birthday.getMonth() + 1)).slice(-2),
				('0' + birthday.getDate()).slice(-2),
			].join('-') +
			' ' +
			[
				('0' + birthday.getHours()).slice(-2),
				('0' + birthday.getMinutes()).slice(-2),
				('0' + birthday.getSeconds()).slice(-2),
			].join(':');

		setMessages([
			...messages,
			`You were born on ${birthday.toISOString().split('T')[0]}`,
			`You were named ${charFirstName} ${famLastName} by your parents ${dadFirstName} and ${momFirstName} ${famLastName} on ${
				birthday.toISOString().split('T')[0]
			}`,
		]);
		updatePlayerData({
			birthDate: birthDateString,
			nameLog: [
				{
					firstName: charFirstName,
					lastName: famLastName,
					effectiveDate: birthDateString,
				},
			],
		});

		setCurrentPage(0);
	};

	const toggleTooltips = () => {
		setEnableTooltips(!enableTooltips);
	};

	return (
		<div style={containerStyle}>
			<div>
				<button
					style={buttonStyle}
					onClick={handleBeBornClick}
					title={enableTooltips ? 'Click to start your journey!' : ''}
				>
					Be Born
				</button>
				<div style={{ marginTop: '20px' }}>
					<input
						id='enableTooltips'
						type='checkbox'
						checked={enableTooltips}
						onChange={toggleTooltips}
						style={checkboxStyle}
					/>
					<label htmlFor='enableTooltips' style={labelStyle}>
						Enable Tooltips
					</label>
				</div>
			</div>
		</div>
	);
};

export default BeBornButton;
