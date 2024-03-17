import React, { useState } from 'react';
import ExampleComponent from '../ExampleComponent';
import CharacterInfo from './CharacterInfo';

const ModuleContainer = ({ colors, birthDate, gameTime, formatDate }) => {
	// Create an array to store the selected index for each module
	const [selectedIndices, setSelectedIndices] = useState(
		Array.from({ length: 10 }, () => 0)
	);

	const handleChange = (index, event) => {
		// Update the selected index for the specific module
		const newSelectedIndices = [...selectedIndices];
		newSelectedIndices[index] = event.target.value;
		setSelectedIndices(newSelectedIndices);
	};

	const ModuleArray = [
		{ id: 1, name: 'None', component: ExampleComponent },
		{ id: 2, name: 'Character Info', component: CharacterInfo },
		// Add more components as needed
	];

	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: 'repeat(5, 1fr)',
				gridTemplateRows: 'repeat(2, 300px)', // Adjust the row height as needed
				gap: '20px',
				padding: '20px',
			}}
		>
			{selectedIndices.map((selectedIndex, index) => (
				<div
					key={index}
					style={{
						backgroundColor: colors.moduleBackground,
						color: colors.textHighlight,
						padding: '20px',
						borderRadius: '8px',
						boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
						display: 'flex',
						flexDirection: 'column',
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
						{/* Dynamically render the selected component with props */}
						{React.createElement(ModuleArray[selectedIndex].component, {
							birthDate: birthDate,
							gameTime: gameTime,
							formatDate: formatDate,
						})}
					</div>
				</div>
			))}
		</div>
	);
};

export default ModuleContainer;
