//Constructor is another function

//Define a constructor function

function User (name, age){
    this.firstName = name;
    this.age = age;
}

//create a new instance ofUser using the 'new' keyword
const user = new User('Prathibha', 24);

// Access properties of User
console.log(user.firstName);
console.log(user.age);