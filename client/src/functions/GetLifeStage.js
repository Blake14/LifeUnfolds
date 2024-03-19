const GetLifeStage = (age) => {
	if (typeof age !== 'string' || !age.includes(' ')) {
		return 'Unknown Age Stage'; // Handle unexpected age format
	}

	const ageParts = age.split(' ');
	const ageValue = parseInt(ageParts[0]);
	const ageUnit = ageParts[1];

	if (isNaN(ageValue) || !ageUnit) {
		return 'Unknown Age Stage'; // Handle non-numeric age value or missing age unit
	}

	// Determine the life stage based on age unit and value
	if (ageUnit.startsWith('month')) {
		return ageValue < 1 ? 'Newborn' : 'Baby';
	} else if (
		ageUnit.startsWith('day') ||
		ageUnit.startsWith('hour') ||
		ageUnit.startsWith('minute') ||
		ageUnit.startsWith('second')
	) {
		return 'Newborn';
	} else if (ageUnit.startsWith('year')) {
		if (ageValue <= 2) return 'Toddler';
		if (ageValue <= 4) return 'Preschooler';
		if (ageValue <= 12) return 'Child';
		if (ageValue <= 19) return 'Teenager';
		if (ageValue <= 24) return 'Young Adult';
		if (ageValue <= 39) return 'Adult';
		if (ageValue <= 59) return 'Middle-Aged Adult';
		return ageValue >= 60 ? 'Elderly' : 'Undead';
	}

	return 'Unknown Age Stage';
};

export default GetLifeStage;
