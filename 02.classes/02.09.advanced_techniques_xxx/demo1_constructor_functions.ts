class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter: Greeter; // use it as a type
greeter = new Greeter("world"); // use it as a class to construct Greeter object
console.log(greeter.greet());

// look at js file