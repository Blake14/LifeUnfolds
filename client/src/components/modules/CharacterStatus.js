import React from 'react';

const CharacterStatus = ({ colors, attributes }) => {
	// Split attributes array into two columns
	const half = Math.ceil(attributes.length / 2);
	const firstColumnAttributes = attributes.slice(0, half);
	const secondColumnAttributes = attributes.slice(half);

	const renderAttributes = (attrs) => (
		<div style={{ flex: 1 }}>
			{attrs.map((attr) => (
				<div
					key={attr.id}
					style={{
						padding: 8,
						color: colors.textHighlight,
						fontSize: 14,
						height: 35,
						marginBottom: 16,
					}}
				>
					<p style={{ margin: '0 0 3px 0' }}>{`${attr.name}:`}</p>
					<div
						style={{
							backgroundColor: colors.background,
							borderRadius: 6,
							height: 18,
						}}
					>
						<div
							style={{
								height: 18,
								width: `${attr.value}%`,
								backgroundColor:
									attr.value > 50 ? colors.highlight : colors.accent,
								borderRadius: 6,
								transition: 'width 0.5s ease-in-out',
							}}
						></div>
					</div>
					<p
						style={{ textAlign: 'right', margin: '2px 0 0 0', fontSize: 12 }}
					>{`${attr.value}%`}</p>
				</div>
			))}
		</div>
	);

	return (
		<div style={{ display: 'flex', height: '100%' }}>
			{renderAttributes(firstColumnAttributes)}
			{renderAttributes(secondColumnAttributes)}
		</div>
	);
};

export default CharacterStatus;
