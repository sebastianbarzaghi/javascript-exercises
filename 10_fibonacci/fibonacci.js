const fibonacci = function(num) {
    let first = 1;
    let second = 1;
    let third = 0;
    let list = [first, second];
    for (i = 0; i < num - 2; i++) {
        third = first + second;
        first = second;
        second = third;
        list.push(third);
    };
    return list[num];
};

// Do not edit below this line
module.exports = fibonacci;
