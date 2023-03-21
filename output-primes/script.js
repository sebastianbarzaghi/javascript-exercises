let userInput = +prompt("Number: ");
let result = "";

if (userInput >= 2) {
    for (i = 0; i <= userInput; i++) {
        if (userInput % 1 == 0 && 
            userInput % userInput == 0) {
            result += `${userInput}, `;
        }
    }
}

console.log(result)