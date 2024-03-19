import React from 'react';
import { IoIosWarning } from 'react-icons/io';

const SubWarning = ({ alertText, size, color, show }) => {
	if (show) {
		return (
			<p
				style={{
					color: color,
					fontSize: size,
					height: 0,
					margin: 0,
				}}
			>
				<IoIosWarning />
				{` ${alertText}`}
			</p>
		);
	}
};

export default SubWarning;
