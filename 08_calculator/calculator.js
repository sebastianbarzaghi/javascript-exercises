const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(x, y) {
	return x + y;
};

const multiply = function(x, y) {
  return x * y;
};

const power = function(x, y) {
	return x ** y;
};

const factorial = function(x) {
  let total = 1;
	for (i = 1; i <= x; i++) {
    total *= i;
  };
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
