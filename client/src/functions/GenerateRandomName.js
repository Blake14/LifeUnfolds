import { FirstNames } from '../data/FirstNames';
import { LastNames } from '../data/LastNames';

const GenerateRandomName = (type) => {
	const nameArray = type === 'first' ? FirstNames : LastNames;
	const randomIndex = Math.floor(Math.random() * nameArray.length);
	return nameArray[randomIndex];
};

export default GenerateRandomName;
