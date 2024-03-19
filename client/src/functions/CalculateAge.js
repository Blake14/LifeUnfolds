const CalculateAge = (birthDate, currentDate) => {
	let ageInYears = currentDate.getFullYear() - birthDate.getFullYear();
	let ageInMonths =
		currentDate.getMonth() - birthDate.getMonth() + ageInYears * 12;
	let ageInDays = currentDate.getDate() - birthDate.getDate();
	let ageInHours = currentDate.getHours() - birthDate.getHours();
	let ageInMinutes = currentDate.getMinutes() - birthDate.getMinutes();
	let ageInSeconds = currentDate.getSeconds() - birthDate.getSeconds();

	if (ageInSeconds < 0) {
		ageInMinutes -= 1;
		ageInSeconds += 60;
	}

	if (ageInMinutes < 0) {
		ageInHours -= 1;
		ageInMinutes += 60;
	}

	if (ageInHours < 0) {
		ageInDays -= 1;
		ageInHours += 24;
	}

	if (ageInDays < 0) {
		ageInMonths -= 1;
		// Get the number of days in the previous month
		let daysInMonth = new Date(
			currentDate.getFullYear(),
			currentDate.getMonth(),
			0
		).getDate();
		ageInDays += daysInMonth;
	}

	if (ageInMonths < 0) {
		ageInYears -= 1;
		ageInMonths += 12;
	}

	// Now decide what to return based on the age
	if (ageInYears > 0) {
		return `${ageInYears} year${ageInYears !== 1 ? 's' : ''} old`;
	} else if (ageInMonths > 0) {
		return `${ageInMonths} month${ageInMonths !== 1 ? 's' : ''} old`;
	} else if (ageInDays > 0) {
		return `${ageInDays} day${ageInDays !== 1 ? 's' : ''} old`;
	} else if (ageInHours > 0) {
		return `${ageInHours} hour${ageInHours !== 1 ? 's' : ''} old`;
	} else if (ageInMinutes > 0) {
		return `${ageInMinutes} minute${ageInMinutes !== 1 ? 's' : ''} old`;
	} else {
		return `${ageInSeconds} second${ageInSeconds !== 1 ? 's' : ''} old`;
	}
};

export default CalculateAge;
