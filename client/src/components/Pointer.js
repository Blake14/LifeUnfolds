import React from 'react';
import ModuleContainer from './modules/ModuleContainer';
import GeneralSetting from './GeneralSetting';

const Pointer = ({
	colors,
	birthDate,
	gameTime,
	formatDate,
	attributes,
	currentPage,
	setCurrentPage,
}) => {
	if (currentPage === 0) {
		return (
			<ModuleContainer
				colors={colors}
				birthDate={birthDate}
				gameTime={gameTime}
				formatDate={formatDate}
				attributes={attributes}
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
