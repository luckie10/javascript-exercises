const removeFromArray = function(arr) {
	let args = Array.prototype.slice.call(arguments, 1);

	return arr.filter(element => !args.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
