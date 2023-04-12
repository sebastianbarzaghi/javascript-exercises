const palindromes = function (string) {
    let re = /[\W]/g;
    let lowString = string.toLowerCase().replace(re, "");
    let reverseString = lowString.split("").reverse().join(""); 
    if (lowString === reverseString) return true;
};

// Do not edit below this line
module.exports = palindromes;
