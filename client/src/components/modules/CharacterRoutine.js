import FrequencyRange from '../FrequencyRange';
import Button from 'react-bootstrap/Button';

const CharacterRoutine = ({ colors, playerData, setPlayerData }) => {
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];
	const weekdays = [
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
		'Sunday',
	];

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				height: '100%',
				width: '100%',
			}}
		>
			{/* Month Selector */}
			<select
				style={{
					padding: '2px',
					backgroundColor: colors.background,
					color: colors.text,
					border: `1px solid ${colors.accent}`,
					textAlign: 'center',
					marginBottom: '2px',
					fontSize: 12,
				}}
			>
				<option value=''>ALL MONTHS</option>
				{months.map((month, index) => {
					return (
						<option key={index} value={index}>
							{month}
						</option>
					);
				})}
			</select>

			{/* Weekday Selector */}
			<select
				style={{
					padding: '2px',
					backgroundColor: colors.background,
					color: colors.text,
					border: `1px solid ${colors.accent}`,
					textAlign: 'center',
					marginBottom: '2px',
					fontSize: 12,
				}}
			>
				<option value=''>ALL DAYS</option>
				{weekdays.map((week, index) => {
					return (
						<option key={index} value={index}>
							{week}
						</option>
					);
				})}
			</select>

			<div
				style={{
					display: 'flex',
					justifyContent: 'space-evenly',
					width: 125,
				}}
			>
				<Button
					variant='secondary'
					size='sm'
					style={{
						fontSize: 12,
						marginTop: 10,
						marginBottom: -10,
						marginLeft: 8,
					}}
				>
					Ask AI
				</Button>
				<Button
					variant='secondary'
					size='sm'
					style={{
						fontSize: 12,
						marginTop: 10,
						marginBottom: -10,
					}}
				>
					Reset
				</Button>
			</div>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(3, 1fr)', // Creates 3 columns
					gap: '10px', // Adds space between columns
					padding: '10px',
					backgroundColor: colors.moduleBackground,
					color: colors.textHighlight,
					fontSize: '18px',
					overflowY: 'auto',
					width: '100%',
					marginTop: '10px',
					height: '100%',
				}}
			>
				{playerData.map((player, playerIndex) =>
					player.routine.map((routine, routineIndex) => (
						<div
							key={routineIndex}
							style={{
								display: 'flex',
								justifyContent: 'center',
								height: 35,
							}}
						>
							<FrequencyRange
								setPlayerData={setPlayerData}
								playerIndex={playerIndex}
								routineName={routine.name}
								title={routine.name}
								v={routine.value}
								colors={colors}
							/>
						</div>
					))
				)}
			</div>
		</div>
	);
};

export default CharacterRoutine;
