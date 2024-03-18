import React from 'react';
import Form from 'react-bootstrap/Form';
import { NotificationPreferences } from '../../data/NotificationPreferences';

const Notifications = ({ colors }) => {
	return (
		<div
			style={{
				color: colors.text,
				padding: '20px',
			}}
		>
			<Form>
				{NotificationPreferences.sort((a, b) => a.order - b.order).map(
					(preference, index) => (
						<Form.Check
							key={index}
							type='checkbox'
							id={`notification-preference-${index}`}
							label={preference.name}
							checked={preference.current}
							style={{ color: colors.textHighlight, marginBottom: '10px' }}
						/>
					)
				)}
			</Form>
		</div>
	);
};

export default Notifications;
