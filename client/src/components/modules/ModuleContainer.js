import React, { useState } from 'react';
import ExampleComponent from '../ExampleComponent';
import CharacterInfo from './CharacterInfo';
import CharacterStatus from './CharacterStatus';
import CharacterRoutine from './CharacterRoutine';

const ModuleContainer = ({
	colors,
	birthDate,
	gameTime,
	formatDate,
	attributes,
}) => {
	const [selectedIndices, setSelectedIndices] = useState(
		Array.from({ length: 8 }, () => 0)
	);

	const handleChange = (index, event) => {
		const newSelectedIndices = [...selectedIndices];
		newSelectedIndices[index] = event.target.value;
		setSelectedIndices(newSelectedIndices);
	};

	const ModuleArray = [
		{ id: 1, name: 'None', component: ExampleComponent },
		{ id: 2, name: 'Character Info', component: CharacterInfo },
		{ id: 3, name: 'Character Status', component: CharacterStatus },
		{ id: 4, name: 'My Routine', component: CharacterRoutine },
	];

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'space-evenly',
				flexWrap: 'wrap',
				padding: 20,
				height: '100%',
				width: '100%',
				overflow: 'hidden', // Ensure the container itself does not overflow
			}}
		>
			{selectedIndices.map((selectedIndex, index) => (
				<div
					style={{
						padding: '20px',
						display: 'flex',
						justifyContent: 'center',
						alignContent: 'center',
						padding: 10,
						width: '25%',
					}}
					key={index}
				>
					<div
						style={{
							backgroundColor: colors.moduleBackground,
							color: colors.textHighlight,
							borderRadius: '8px',
							padding: 20,
							boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
							display: 'flex',
							flexDirection: 'column',
							width: '100%',
						}}
					>
						<select
							value={selectedIndex}
							onChange={(e) => handleChange(index, e)}
							style={{
								padding: '10px',
								marginBottom: '20px',
								backgroundColor: colors.accent,
								color: colors.textHighlight,
								border: `1px solid ${colors.highlight}`,
							}}
						>
							{ModuleArray.map((module, idx) => (
								<option
									key={module.id}
									value={idx}
									style={{
										backgroundColor: colors.background,
										color: colors.text,
									}}
								>
									{module.name}
								</option>
							))}
						</select>
						<div>
							{React.createElement(ModuleArray[selectedIndex].component, {
								birthDate: birthDate,
								gameTime: gameTime,
								formatDate: formatDate,
								attributes: attributes,
								colors: colors,
							})}
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default ModuleContainer;
