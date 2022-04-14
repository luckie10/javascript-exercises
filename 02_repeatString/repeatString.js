const repeatString = function(string, repeat) {
	let repeatedString = '';
	
	if (repeat < 0) return "ERROR";

	for (let i = 0; i < repeat; i++) {
		repeatedString += string;
	}

	return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
