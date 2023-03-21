const reverseString = function(str) {
    const splitString = str.split("");
    const reversedList = [];
    for (const chara of splitString) {
        reversedList.unshift(chara);
    };
    let reversedString = reversedList.join("");
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
