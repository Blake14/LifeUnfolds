import React, { useState, useEffect } from 'react';
import GameTimeUpdater from './functions/GameTimeUpdater';
import Form from 'react-bootstrap/Form';
import { BiPlay, BiPause } from 'react-icons/bi';
import ModuleContainer from './components/modules/ModuleContainer';

const App = () => {
	const colors = {
		background: '#353535',
		text: '#D9D9D9',
		moduleBackground: '#3C6E71',
		textHighlight: '#FFFFFF',
		accent: '#284B63',
		highlight: '#FFD700', // Gold color for highlighting elements like buttons or important text
		activeIcon: '#FFD700', // Active icon color
		inactiveIcon: '#B1B1B1', // Inactive icon color
	};

	const timeUnitOptions = ['second', 'minute', 'hour', 'day', 'month', 'year'];

	useEffect(() => {
		document.body.style.backgroundColor = colors.background;
		document.body.style.color = colors.text;
		document.body.style.margin = '0';
		document.body.style.fontFamily = 'Arial, sans-serif';
	}, [colors]);
	const [birthDate, setBirthDate] = useState(new Date(1995, 11, 21, 0, 0, 0));
	const [gameTime, setGameTime] = useState(new Date(1995, 11, 21, 0, 0, 0)); // Blank Date 2024, 0, 1, 0, 0, 0
	const [gamePaused, setGamePaused] = useState(false);
	const [timeMultiplier, setTimeMultiplier] = useState({
		value: 1,
		unit: 'minute',
	});

	const formatDate = (date) => {
		const options = {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
		};
		return date.toLocaleDateString('en-US', options);
	};

	const handleSelectChange = (event) => {
		setTimeMultiplier({ ...timeMultiplier, unit: event.target.value });
	};

	return (
		<div>
			<GameTimeUpdater
				gameTime={gameTime}
				setGameTime={setGameTime}
				timeMultiplier={timeMultiplier}
				gamePaused={gamePaused}
			/>
			<div
				style={{
					backgroundColor: colors.moduleBackground,
					color: colors.textHighlight,
					padding: '10px 20px',
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<div>{formatDate(gameTime)}</div>

				<div
					style={{
						display: 'flex',
						alignItems: 'center',
					}}
				>
					<Form.Select
						aria-label='Time unit selector'
						value={timeMultiplier.unit}
						onChange={handleSelectChange}
						style={{
							marginRight: '10px',
							color: colors.textHighlight,
							backgroundColor: colors.accent,
							borderColor: colors.highlight,
						}}
					>
						{timeUnitOptions.map((opt) => (
							<option
								key={opt}
								value={opt}
								style={{
									color: colors.text,
									backgroundColor: colors.background,
								}}
							>
								{opt.charAt(0).toUpperCase() + opt.slice(1)}
							</option>
						))}
					</Form.Select>
					<div
						style={{
							width: 250,
							fontSize: 37,
							display: 'flex',
							justifyContent: 'space-evenly',
						}}
					>
						<BiPlay
							style={{
								cursor: 'pointer',
								color: !gamePaused ? colors.highlight : colors.text,
								marginRight: '10px',
							}}
							onClick={() => setGamePaused(false)}
						/>
						<BiPause
							style={{
								cursor: 'pointer',
								color: gamePaused ? colors.highlight : colors.text,
							}}
							onClick={() => setGamePaused(true)}
						/>
					</div>
				</div>
			</div>
			<div>
				<ModuleContainer
					colors={colors}
					birthDate={birthDate}
					gameTime={gameTime}
					formatDate={formatDate}
				/>
			</div>
		</div>
	);
};

export default App;
