import React, { useEffect } from 'react';

const GameTimeUpdater = ({
	gameTime,
	setGameTime,
	timeMultiplier,
	gamePaused,
	attributes,
	setAttributes,
}) => {
	useEffect(() => {
		if (!gamePaused) {
			const multiplier = getMultiplierMilliseconds(timeMultiplier);
			const timer = setInterval(() => {
				const newTime = new Date(gameTime.getTime() + multiplier);
				setGameTime(newTime);

				// Update the attributes in an immutable way
				const updatedAttributes = attributes.map((attr) => {
					if (attr.name === 'Energy') {
						// Preventing energy from going below 0
						const newValue = attr.value > 0 ? attr.value - 1 : 0;
						return { ...attr, value: newValue };
					}
					return attr;
				});

				setAttributes(updatedAttributes);
			}, 1000);
			return () => clearInterval(timer);
		}
	}, [
		gameTime,
		setGameTime,
		timeMultiplier,
		gamePaused,
		attributes,
		setAttributes,
	]);

	function getMultiplierMilliseconds({ value, unit }) {
		switch (unit) {
			case 'second':
				return value * 1000;
			case 'minute':
				return value * 60000;
			case 'hour':
				return value * 3600000;
			case 'day':
				return value * 86400000;
			case 'month':
				return value * 2629800000;
			case 'year':
				return value * 31557600000;
			default:
				return value * 1000;
		}
	}

	return null;
};

export default GameTimeUpdater;
