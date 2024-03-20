import React, { useState, useEffect } from 'react';
import GameTimeUpdater from './functions/GameTimeUpdater';
import Form from 'react-bootstrap/Form';
import { BiPlay, BiPause } from 'react-icons/bi';
import Pointer from './components/Pointer';
import MenuBarOptions from './components/MenuBarOptions';
import CalculateAge from './functions/CalculateAge';
import GetLifeStage from './functions/GetLifeStage';
import GenerateBirthdate from './functions/GenerateBirthdate';

const App = () => {
	const [toolTips, setToolTips] = useState({
		enabled: true,
		tips: [
			{
				id: 1,
				order: 10,
				title: 'Character Info Module',
				description: '',
			},
		],
	});
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
	const [selectedIndices, setSelectedIndices] = useState([
		1, 2, 3, 4, 5, 0, 0, 0,
	]);
	const [messages, setMessages] = useState([]);
	const [gameTime, setGameTime] = useState(new Date(2024, 0, 1));
	const [age, setAge] = useState('');
	const [playerData, setPlayerData] = useState([
		{
			nickName: '',
			birthDate: null,
			deathDate: null,
			log: [],
			routine: [
				{
					name: 'Eat',
					value: 5,
					disabled: false,
				},
				{
					name: 'Sleep',
					value: 5,
					disabled: false,
				},
				{
					name: 'Work',
					value: 5,
					disabled: false,
				},
				{
					name: 'Socialize',
					value: 5,
					disabled: false,
				},
				{
					name: 'Exercise',
					value: 5,
					disabled: false,
				},
				{
					name: 'Relax',
					value: 5,
					disabled: false,
				},
				{
					name: 'Study',
					value: 5,
					disabled: false,
				},
				{
					name: 'Shop',
					value: 5,
					disabled: false,
				},
				{
					name: 'Clean',
					value: 5,
					disabled: false,
				},
			],

			ratings: [
				{
					social: 0,
					athletics: 0,
					intelligence: 0,
					empathy: 0,
					mentalStability: 0,
					immunity: 0,
					addictive: 0,
				},
			],
			nameLog: [
				{
					firstName: 'First',
					lastName: 'Last',
					effectiveDate: '1901-01-01',
					expirationDate: null,
				},
			],
			family: [],
			homeLog: [
				{
					cityName: 'New York City',
					stateAbbr: 'NY',
					address: '123 Main St.',
					effectiveDate: '1901-01-01',
					expirationDate: null,
					status: 'Resident - Dependent',
				},
			],
		},
	]);
	const [settings, setSettings] = useState([
		{
			name: 'Max Health',
			value: 100,
			min: 0,
			max: 300,
			placeholder: 99,
			type: 'input',
		},
		{
			name: 'Max Energy',
			value: 100,
			min: 0,
			max: 300,
			placeholder: 99,
			type: 'input',
		},
		{
			name: 'Avg Life Expectancy',
			value: 76,
			min: 18,
			max: 149,
			placeholder: 69,
			type: 'input',
		},
		{
			name: 'Autosave Interval',
			value: 'Every Month',
			placeholder: 'Select Interval',
			type: 'select',
			options: ['Every Day', 'Every Month'],
		},
		{
			name: 'Infinite Hunger',
			value: 'No',
			placeholder: 'Select Yes/No',
			type: 'select',
			options: ['No', 'Yes'],
		},
		{
			name: 'Infinite Hydration',
			value: 'No',
			placeholder: 'Select Yes/No',
			type: 'select',
			options: ['No', 'Yes'],
		},
		{
			name: 'Infinite Energy',
			value: 'No',
			placeholder: 'Select Yes/No',
			type: 'select',
			options: ['No', 'Yes'],
		},
		{
			name: 'Infinite Sanity',
			value: 'No',
			placeholder: 'Select Yes/No',
			type: 'select',
			options: ['No', 'Yes'],
		},
		{
			name: 'Infinite Morale',
			value: 'No',
			placeholder: 'Select Yes/No',
			type: 'select',
			options: ['No', 'Yes'],
		},
		{
			name: 'Infinite Fatigue',
			value: 'No',
			placeholder: 'Select Yes/No',
			type: 'select',
			options: ['No', 'Yes'],
		},
		{
			name: 'Infinite Social',
			value: 'No',
			placeholder: 'Select Yes/No',
			type: 'select',
			options: ['No', 'Yes'],
		},
		{
			name: 'Infinite Health',
			value: 'No',
			placeholder: 'Select Yes/No',
			type: 'select',
			options: ['No', 'Yes'],
		},
		{
			name: 'Infinite Happiness',
			value: 'No',
			placeholder: 'Select Yes/No',
			type: 'select',
			options: ['No', 'Yes'],
		},
		{
			name: 'Infinite Money',
			value: 'No',
			placeholder: 'Select Yes/No',
			type: 'select',
			options: ['No', 'Yes'],
		},
		{
			name: 'Federal Tax Rate',
			value: 0.14,
			min: 0,
			max: 0.35,
			placeholder: 0.14,
			type: 'input',
		},
		{
			name: 'Local Tax Rate',
			value: 0.05,
			min: 0,
			max: 0.2,
			placeholder: 0.05,
			type: 'input',
		},
		{
			name: 'Inflation Rate',
			value: 0.02,
			min: -0.01,
			max: 0.1,
			placeholder: 0.02,
			type: 'input',
		},
		{
			name: 'Population Growth Rate',
			value: 0.01,
			min: 0,
			max: 0.03,
			placeholder: 0.01,
			type: 'input',
		},
		{
			name: 'Wage Growth Rate',
			value: 0.03,
			min: 0,
			max: 0.08,
			placeholder: 0.03,
			type: 'input',
		},
		{
			name: 'Mortality Rate',
			value: 0.008,
			min: 0.005,
			max: 0.015,
			placeholder: 0.008,
			type: 'input',
		},
		{
			name: 'Crime Rate',
			value: 0.04,
			min: 0,
			max: 0.4,
			placeholder: 0.04,
			type: 'input',
		},
		{
			name: 'Education Quality Index',
			value: 0.7,
			min: 0,
			max: 1,
			placeholder: 0.7,
			type: 'input',
		},
		{
			name: 'Unemployment Rate',
			value: 0.05,
			min: 0,
			max: 0.25,
			placeholder: 0.05,
			type: 'input',
		},
		{
			name: 'Healthcare Quality Index',
			value: 0.75,
			min: 0.5,
			max: 1,
			placeholder: 0.75,
			type: 'input',
		},
		{
			name: 'Environmental Quality Index',
			value: 0.65,
			min: 0.3,
			max: 1,
			placeholder: 0.65,
			type: 'input',
		},
		{
			name: 'Housing Affordability Index',
			value: 0.3,
			min: 0,
			max: 1,
			placeholder: 0.3,
			type: 'input',
		},
		{
			name: 'Public Infrastructure Quality',
			value: 0.6,
			min: 0.2,
			max: 1,
			placeholder: 0.6,
			type: 'input',
		},
		{
			name: 'Age Limit to Change Name',
			value: 'Yes',
			placeholder: 'Select Yes/No',
			type: 'select',
			options: ['No', 'Yes'],
		},
	]);

	const timeUnitOptions = ['hour', 'day', 'month', 'year'];
	const [currentPage, setCurrentPage] = useState(0);
	// 0 = Home, 1 = Settings
	const updatePlayerData = (newData) => {
		setPlayerData((prevData) => {
			let updatedData = [...prevData];
			updatedData[0] = { ...updatedData[0], ...newData };
			return updatedData;
		});
	};
	const [notificationPreferences, setNotificationPreferences] = useState([
		{
			name: 'Status Depletion',
			current: true,
			order: 10,
		},
		{
			name: 'Pay Days',
			current: false,
			order: 20,
		},
		{
			name: 'Major News',
			current: true,
			order: 30,
		},
		{
			name: 'Family News',
			current: true,
			order: 40,
		},
		{
			name: 'Job Announcements',
			current: true,
			order: 50,
		},
		{
			name: 'Health Changes',
			current: true,
			order: 60,
		},
		{
			name: 'Major Expenses',
			current: true,
			order: 70,
		},
	]);
	useEffect(() => {
		document.body.style.backgroundColor = colors.background;
		document.body.style.color = colors.text;
		document.body.style.margin = '0';
		document.body.style.fontFamily = 'Arial, sans-serif';
	}, [colors]);

	useEffect(() => {
		const playerBirthDate = playerData[0].birthDate
			? new Date(playerData[0].birthDate)
			: null;
		if (playerBirthDate && gameTime) {
			setAge(CalculateAge(playerBirthDate, gameTime));
		}
	}, [playerData, gameTime]);
	const [gamePaused, setGamePaused] = useState(false);
	const [timeMultiplier, setTimeMultiplier] = useState({
		value: 1,
		unit: timeUnitOptions[0],
	});
	const formatDate = (date) => {
		if (!date) {
			return 'Invalid date';
		}

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

	const [attributes, setAttributes] = useState([
		{
			id: 1,
			name: 'Energy',
			description: "Represents the character's physical vitality and stamina.",
			value: 100,
		},
		{
			id: 2,
			name: 'Social',
			description:
				"Indicates the character's social connections and satisfaction from interactions.",
			value: 100,
		},
		{
			id: 3,
			name: 'Hunger',
			description:
				'Measures the need for sustenance and the effects of eating or starvation.',
			value: 0,
		},
		{
			id: 4,
			name: 'Hope',
			description:
				"Reflects the character's optimism and motivation to achieve goals.",
			value: 100,
		},
		{
			id: 5,
			name: 'Health',
			description:
				'Overall physical well-being, affected by various factors like diet, rest, stress, and injuries.',
			value: 100,
		},
		{
			id: 6,
			name: 'Sanity',
			description:
				"Indicates the character's psychological health, influenced by factors like stress, achievements, and social interactions.",
			value: 100,
		},
		{
			id: 8,
			name: 'Morale',
			description:
				"The character's current spirits or mood, influencing performance and interactions.",
			value: 100,
		},
		{
			id: 9,
			name: 'Fatigue',
			description:
				'Measures the level of tiredness, affecting energy and the likelihood of mistakes or accidents.',
			value: 0,
		},
		{
			id: 10,
			name: 'Hydration',
			description:
				'Essential for survival and performance, reflecting the need for water intake.',
			value: 100,
		},
	]);
	const playerBirthDate = playerData[0].birthDate
		? new Date(playerData[0].birthDate)
		: null;

	return (
		<div
			style={{
				height: '100vh',
				display: 'flex',
				flexDirection: 'column',
				overflow: 'hidden', // Prevent scrolling on the main page
			}}
		>
			<GameTimeUpdater
				gameTime={gameTime}
				setGameTime={setGameTime}
				timeMultiplier={timeMultiplier}
				gamePaused={gamePaused}
				setAttributes={setAttributes}
				attributes={attributes}
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
				<div style={{ width: 400, height: 75 }}>
					<p style={{ fontSize: 12 }}>
						{`${playerData[0].nickName || playerData[0].nameLog[0].firstName} ${
							playerData[0].nameLog[0].lastName
						} (${playerBirthDate && gameTime ? age : 'Calculating age...'}) - ${
							playerBirthDate && gameTime
								? GetLifeStage(age) || ''
								: 'Determining life stage...'
						}`}
					</p>
					<p style={{ fontSize: 15 }}>
						{gameTime ? formatDate(gameTime) : 'Loading...'}
					</p>
				</div>
				<MenuBarOptions setCurrentPage={setCurrentPage} colors={colors} />
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
			<div
				style={{
					width: '100%',
					height: '100%',
					display: 'flex',
					overflow: 'hidden',
				}}
			>
				<Pointer
					colors={colors}
					birthDate={playerData[0].nameLog[0].birthDate}
					gameTime={gameTime}
					formatDate={formatDate}
					attributes={attributes}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
					setSelectedIndices={setSelectedIndices}
					selectedIndices={selectedIndices}
					setGamePaused={setGamePaused}
					playerData={playerData}
					updatePlayerData={updatePlayerData}
					messages={messages}
					setMessages={setMessages}
					calculateAge={CalculateAge}
					setGameTime={setGameTime}
					playerBirthDate={playerBirthDate}
					age={age}
					settings={settings}
					setSettings={setSettings}
					setPlayerData={setPlayerData}
					notificationPreferences={notificationPreferences}
					setNotificationPreferences={setNotificationPreferences}
				/>
			</div>
		</div>
	);
};

export default App;
