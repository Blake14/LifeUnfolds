const GenerateBirthdate = () => {
	const year = Math.floor(Math.random() * (2005 - 1960 + 1)) + 1960;
	const month = Math.floor(Math.random() * 12);
	const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
	const daysInMonth = [
		31,
		isLeapYear ? 29 : 28,
		31,
		30,
		31,
		30,
		31,
		31,
		30,
		31,
		30,
		31,
	][month];
	const day = Math.floor(Math.random() * daysInMonth) + 1;
	const hours = Math.floor(Math.random() * 24);
	const minutes = Math.floor(Math.random() * 60);
	const seconds = Math.floor(Math.random() * 60);

	return new Date(year, month, day, hours, minutes, seconds);
};

export default GenerateBirthdate;
