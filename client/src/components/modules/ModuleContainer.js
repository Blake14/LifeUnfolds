import React, { useState } from 'react';
import ExampleComponent from '../ExampleComponent';
import CharacterInfo from './CharacterInfo';
import CharacterStatus from './CharacterStatus';
import CharacterRoutine from './CharacterRoutine';
import Notifications from './Notifications';
import MessageCenter from './MessageCenter';

const ModuleContainer = ({
	colors,
	birthDate,
	gameTime,
	formatDate,
	attributes,
	selectedIndices,
	setSelectedIndices,
	playerData,
	messages,
	calculateAge,
	playerBirthDate,
	updatePlayerData,
	setMessages,
	age,
	settings,
	setSettings,
	setPlayerData,
	notificationPreferences,
	setNotificationPreferences,
}) => {
	const handleChange = (index, event) => {
		const newSelectedIndices = [...selectedIndices];
		newSelectedIndices[index] = parseInt(event.target.value, 10);
		setSelectedIndices(newSelectedIndices);
	};

	const ModuleArray = [
		{ id: 1, name: 'None', component: ExampleComponent },
		{ id: 2, name: 'Character Info', component: CharacterInfo },
		{ id: 3, name: 'Character Status', component: CharacterStatus },
		{ id: 4, name: 'My Routine', component: CharacterRoutine },
		{ id: 5, name: 'Notifications', component: Notifications },
		{ id: 6, name: 'Life Story', component: MessageCenter },
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
						display: 'flex',
						justifyContent: 'center',
						alignContent: 'center',
						padding: 10,
						width: '25%',
						height: '50%',
					}}
					key={index}
				>
					<div
						style={{
							backgroundColor: colors.moduleBackground,
							color: colors.textHighlight,
							borderRadius: '8px',

							boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
							display: 'flex',
							width: '100%',
							height: '100%',
							position: 'relative',
						}}
					>
						<select
							value={selectedIndex}
							onChange={(e) => handleChange(index, e)}
							style={{
								padding: '10px',
								backgroundColor: colors.accent,
								color: colors.textHighlight,
								border: `1px solid ${colors.highlight}`,
								position: 'absolute',
								top: 20,
								left: '5%',
								width: '90%',
							}}
						>
							{ModuleArray.map((module, idx) => (
								<option
									key={module.id}
									value={idx} // This should be the index in ModuleArray
									style={{
										backgroundColor: colors.background,
										color: colors.text,
									}}
								>
									{module.name}
								</option>
							))}
						</select>
						<div
							style={{
								height: '100%',
								width: '100%',
								paddingTop: 70,
								paddingLeft: 10,
								paddingRight: 10,
								paddingBottom: 10,
							}}
						>
							{React.createElement(ModuleArray[selectedIndex].component, {
								birthDate: birthDate,
								gameTime: gameTime,
								formatDate: formatDate,
								attributes: attributes,
								colors: colors,
								playerData: playerData,
								messages: messages,
								setMessages: setMessages,
								calculateAge: calculateAge,
								playerBirthDate: playerBirthDate,
								updatePlayerData: updatePlayerData,
								age: age,
								settings: settings,
								setSettings: setSettings,
								setPlayerData: setPlayerData,
								notificationPreferences: notificationPreferences,
								setNotificationPreferences: setNotificationPreferences,
							})}
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default ModuleContainer;
