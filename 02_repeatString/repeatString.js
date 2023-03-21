const repeatString = function(string, times) {
    let repeatedString = "";
    if (times > 0) {
        for (i = 0; i < times; i++) {
            repeatedString += string;
        }
    }
    return repeatedString
};

// Do not edit below this line
module.exports = repeatString;
