const ParseAgeString = (ageString) => {
	const ageParts = ageString.split(' ');
	const ageValue = parseInt(ageParts[0], 10); // Always specify the radix
	const ageUnit = ageParts[1];
	return {
		age: ageValue,
		unit: ageUnit,
	};
};

// Make sure the age string is valid and the function is defined before using it.

export default ParseAgeString;
