import React, { useEffect } from 'react';
import ModuleContainer from './modules/ModuleContainer';
import GeneralSetting from './GeneralSetting';
import BeBornButton from './BeBornButton';

const Pointer = ({
	colors,
	birthDate,
	gameTime,
	formatDate,
	attributes,
	currentPage,
	setCurrentPage,
	setSelectedIndices,
	selectedIndices,
	setGamePaused,
	playerData,
	updatePlayerData,
	messages,
	calculateAge,
	setMessages,
	setGameTime,
	playerBirthDate,
	age,
}) => {
	// Use useEffect to handle side effects based on currentPage or playerData changes.
	useEffect(() => {
		if (currentPage === 99 || playerData[0].nameLog[0].firstName === 'First') {
			setGamePaused(true);
		} else if (currentPage === 1) {
			setGamePaused(true);
		} else {
			setGamePaused(false);
		}
	}, [currentPage, playerData, setGamePaused]);

	// Return the appropriate component based on currentPage without causing re-renders.
	if (currentPage === 99 || playerData[0].nameLog[0].firstName === 'First') {
		return (
			<div>
				<BeBornButton
					colors={colors}
					setCurrentPage={setCurrentPage}
					playerData={playerData}
					updatePlayerData={updatePlayerData}
					setMessages={setMessages}
					messages={messages}
					gameTime={gameTime}
					setGameTime={setGameTime}
				/>
			</div>
		);
	} else if (currentPage === 0) {
		return (
			<ModuleContainer
				colors={colors}
				birthDate={birthDate}
				gameTime={gameTime}
				formatDate={formatDate}
				attributes={attributes}
				setSelectedIndices={setSelectedIndices}
				selectedIndices={selectedIndices}
				playerData={playerData}
				messages={messages}
				calculateAge={calculateAge}
				playerBirthDate={playerBirthDate}
				updatePlayerData={updatePlayerData}
				setMessages={setMessages}
				age={age}
			/>
		);
	} else if (currentPage === 1) {
		return (
			<GeneralSetting
				colors={colors}
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
			/>
		);
	} else {
		return <div>Page Not Found</div>;
	}
};

export default Pointer;
