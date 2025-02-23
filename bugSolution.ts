function greeter(person: string | string[]) {
    if (Array.isArray(person)) {
        return "Hello, " + person.join(" ");
    } else {
        return "Hello, " + person;
    }
}

let user = ["Jane", "Doe"];
let user2 = "John Doe";

console.log(greeter(user)); // Correct handling of array
console.log(greeter(user2)); // Correct handling of string