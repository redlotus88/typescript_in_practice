"use strict";
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Jane User", lastName: "User" };
document.body.textContent = greeter(user);
