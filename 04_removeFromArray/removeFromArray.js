const removeFromArray = function(list, value) {
    for (var i = list.length - 1; i >= 0; i--) {
        if (list[i] == value) {
            list.splice(i, 1);
        };
    };
    return list;
};
// Do not edit below this line
module.exports = removeFromArray;
