/**
 * Returns the Conway-Guy name for a number based on the number of zeros.
 * @param {number} zeros -- The number of zeros in the number.
 * @returns {string} -- The name of the number.
 */
function nameNumber(zeros) {
	if (typeof zeros !== 'number' || zeros < 0 || !Number.isInteger(zeros)) {
		throw new Error('Input must be a non-negative integer');
	}

	// Handle special cases for smaller numbers
	if (zeros < 3) return '';
	if (zeros < 6) return 'thousand';
	if (zeros < 9) return 'million';
	if (zeros < 12) return 'billion';
	if (zeros < 15) return 'trillion';
	if (zeros < 18) return 'quadrillion';
	if (zeros < 21) return 'quintillion';
	if (zeros < 24) return 'sextillion';
	if (zeros < 27) return 'septillion';
	if (zeros < 30) return 'octillion';
	if (zeros < 33) return 'nonillion';

	// Names, according to the Conway-Guy system
	const _NAMES = [
		['', 'un', 'do', 'tre', 'quattuor', 'quin', 'se', 'septe', 'octo', 'nove'],
		['', 'deci', 'viginti', 'triginta', 'quadraginta', 'quinquaginta', 'sexaginta', 'septuaginta', 'octoginta', 'nonaginta'],
		['', 'centi', 'ducenti', 'trecenti', 'quadringenti', 'quingenti', 'sescenti', 'septingenti', 'octingenti', 'nongenti'],
		['', 'milli', 'billi', 'trilli', 'quadrilli', 'quintilli', 'sextilli', 'septilli', 'octilli', 'nonilli']
	];
	const _NAMERULES = [
		[[], [], [], ['s'], [], [], ['s', 'x'], ['m', 'n'], [], ['m', 'n']],
		[[], ['n'], ['m', 's'], ['n', 's'], ['n', 's'], ['n', 's'], ['n'], ['n'], ['m', 'x'], []],
		[[], ['n', 'x'], ['n'], ['n', 's'], ['n', 's'], ['n', 's'], ['n'], ['n'], ['m', 'x'], []],
		[[], [], [], [], [], [], [], [], [], []]
	];

	const e = String(Math.floor((zeros - 3) / 3)).split('').reverse();
	const out = [];
	for (let i = e.length - 1; i >= 0; i--) {
		if (!_NAMES[i]) throw new Error('Number too large');
		out[i] = _NAMES[i][e[i]];
		if (i === 0) {
			const lastRules = _NAMERULES[1][e[e.length - 1]];
			const onesRules = _NAMERULES[i][e[i]];
			for (let j = 0; j < onesRules.length; j++) {
				if (lastRules.indexOf(onesRules[j]) > -1) {
					out[i] += lastRules[lastRules.indexOf(onesRules[j])];
				}
			}
		}
	}
	let name = out.join('');
	if (name.endsWith('a')) name = name.slice(0, -1) + 'i';
	name = name.charAt(0).toUpperCase() + name.slice(1);
	return name + 'llion';
}

module.exports = { nameNumber };