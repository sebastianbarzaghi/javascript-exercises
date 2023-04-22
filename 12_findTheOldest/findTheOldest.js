const findTheOldest = function(people) {
    let oldestAge = null;
    let oldestPerson = null;

    for (const person of people) {
        let age = null;
        if (person.yearOfDeath) {
            age = person.yearOfDeath - person.yearOfBirth;
        } else {
            const newDate = new Date().getFullYear();
            age = newDate - person.yearOfBirth;
        };

        if (age > oldestAge || oldestAge === null) {
            oldestAge = age;
            oldestPerson = person;
        };
    };
    
    return (oldestPerson);
};

// Do not edit below this line
module.exports = findTheOldest;
