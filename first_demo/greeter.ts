interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: any) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = {firstName: "Jane User", lastName: "User"}

document.body.textContent = greeter(user);