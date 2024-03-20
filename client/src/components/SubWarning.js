import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { IoIosWarning } from 'react-icons/io';
import { FaSave } from 'react-icons/fa';

const SubWarning = ({
	agePass,
	updateField,
	editValue,
	icnStyle,
	fieldName,
	colors,
}) => {
	if (!agePass) {
		return (
			<OverlayTrigger
				key='top'
				placement='top'
				overlay={
					<Tooltip id={`tooltip-top`}>
						<IoIosWarning />
						You must be at least 18 years old to legally change your name.
					</Tooltip>
				}
			>
				<span style={{ display: 'inline-block', cursor: 'not-allowed' }}>
					<FaSave style={{ ...icnStyle, color: 'gray' }} />
				</span>
			</OverlayTrigger>
		);
	} else {
		return (
			<FaSave
				style={{
					...icnStyle,
					color: colors.textHighlight,
					cursor: 'pointer',
				}}
				onClick={() => updateField(fieldName, editValue)}
			/>
		);
	}
};

export default SubWarning;
