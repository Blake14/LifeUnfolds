import React, { useEffect } from 'react';

const GameTimeUpdater = ({
	gameTime,
	setGameTime,
	timeMultiplier,
	gamePaused,
}) => {
	useEffect(() => {
		// Only set up the interval if the game is not paused
		if (!gamePaused) {
			const multiplier = getMultiplierMilliseconds(timeMultiplier);
			const timer = setInterval(() => {
				const newTime = new Date(gameTime.getTime() + multiplier);
				setGameTime(newTime);
			}, 1000); // Update every second based on the multiplier

			// Clear the interval on effect cleanup or when game is paused
			return () => clearInterval(timer);
		}
		// You could optionally handle any necessary actions when paused/resumed here
	}, [gameTime, setGameTime, timeMultiplier, gamePaused]); // Include gamePaused in dependencies

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
				return value * 1000; // Default back to second if no match
		}
	}

	return null;
};

export default GameTimeUpdater;
