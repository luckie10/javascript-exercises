const palindromes = function (str) {
	let newStr = str.replace(/[\W_\s]/gi, '').toLowerCase();

	return newStr === newStr.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
