// Object Literals
const person = {
    name: "John",
    age: 20,
    city:"New York",

    sayHello: function (){
        console.log("Hello my name is " + this.name + " and my age is " + this.age);
    }
}

console.log(person.name);
console.log(person.age);
person.sayHello();