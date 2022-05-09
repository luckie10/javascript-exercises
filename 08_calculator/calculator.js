const add = function(a, b) {
	return +a + +b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, next) => total += next, 0);
};

const multiply = function(arr) {
	return arr.reduce((total, next) => total *= next);
};

const power = function(base, pow) {
  return base ** pow;
};

const factorial = function(num) {
	if (num === 0) return 1;

  let factor = 1;
  for(let i = 1; i <= num; i++) {
    factor *= i;
  }

  return factor;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
