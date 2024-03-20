import React from 'react';
import Form from 'react-bootstrap/Form';

const Notifications = ({
	colors,
	notificationPreferences,
	setNotificationPreferences,
}) => {
	const handleCheckboxChange = (index) => {
		const updatedPreferences = notificationPreferences.map((preference, i) => {
			if (i === index) {
				return { ...preference, current: !preference.current };
			}
			return preference;
		});
		setNotificationPreferences(updatedPreferences);
	};

	return (
		<div
			style={{
				color: colors.text,
				padding: '20px',
				height: '100%',
				overflowY: 'scroll',
			}}
		>
			<Form>
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: '1fr 1fr',
						gap: '20px',
					}}
				>
					{notificationPreferences
						.sort((a, b) => a.order - b.order)
						.map((preference, index) => (
							<Form.Check
								key={index}
								type='checkbox'
								id={`notification-preference-${index}`}
								label={preference.name}
								checked={preference.current}
								onChange={() => handleCheckboxChange(index)}
								style={{ color: colors.textHighlight, marginBottom: '10px' }}
							/>
						))}
				</div>
			</Form>
		</div>
	);
};

export default Notifications;
