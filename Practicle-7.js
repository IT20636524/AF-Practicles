// 'This' keyword in Javascript

const person1 = {
    name:'John',
    sayHello: function () {
        console.log("Hello, my name is " + this.name);
    }
};

const person2 = {
    name:'Mary'
};

person2.sayHello = person1.sayHello;

person1.sayHello(); // Hello, my name is John
person2.sayHello(); //Hello, my name is Mary