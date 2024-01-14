// Objects with new keyword

class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const John = new User('John', 'Doe');

console.log(John.firstName + ' ' + John.lastName);