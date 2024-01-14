// Closure

function outerFunction(outerVariable) {
    function innerFunction(innerVariable) {
        console.log('outer variable ' + outerVariable);
        console.log('inner variable ' + innerVariable);
    }

    return innerFunction;
}

const closure = outerFunction("Hello");
closure("World");

// Another example

function greeting() {
    let message = "hi";

    function sayHello() {
        let name = "John";
        console.log(message + ' ' + name);
    }
    return sayHello;
}

let hi = greeting();
hi();

