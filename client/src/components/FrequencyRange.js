import React from 'react';
import Form from 'react-bootstrap/Form';

const FrequencyRange = ({
	title,
	v,
	onChange,
	colors,
	setPlayerData,
	playerIndex,
	routineName,
}) => {
	const labelStyle = {
		color: colors.textHighlight,
		marginBottom: '5px',
		fontSize: 11,
	};

	const rangeStyle = {
		opacity: 0.7,
	};

	const handleRangeChange = (e) => {
		const newValue = e.target.value;
		setPlayerData((prevData) => {
			// Check if the playerIndex is within the bounds of the playerData array
			if (playerIndex >= 0 && playerIndex < prevData.length) {
				const updatedData = [...prevData];
				const player = updatedData[playerIndex];

				// Ensure the player object and routine array are defined
				if (player && player.routine) {
					const routineItemIndex = player.routine.findIndex(
						(item) => item.name === routineName
					);

					// Check if we found the routine item to update
					if (routineItemIndex > -1) {
						player.routine[routineItemIndex].value = newValue;
					}
				}
				return updatedData;
			}
			// Return the previous data unmodified if the index is out of bounds
			return prevData;
		});

		// Invoke the passed onChange handler, if any
		if (onChange) {
			onChange(e);
		}
	};

	return (
		<div style={{ width: '100%' }}>
			<Form.Label style={labelStyle}>
				<strong>{title}</strong>: {v}
			</Form.Label>
			<Form.Range
				value={v}
				min={1}
				max={10}
				onChange={handleRangeChange}
				style={rangeStyle}
			/>
		</div>
	);
};

export default FrequencyRange;
