const ParseAgeString = (ageString) => {
	if (!ageString) {
		console.error('Age string is undefined or null.');
	}

	const ageParts = ageString.split(' ');
	const ageInt = parseInt(ageParts[0], 10);
	return ageInt;
};

export default ParseAgeString;
