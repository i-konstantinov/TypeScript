// interface == blueprint of the object we want to accept

interface Star {
    name: String;
    age?: number;
    // "?" after the name of a variable
    // sets it as optional and not required
}

function printName(stark : Star) {
    console.log(stark.name);
}

printName({name: "Eddard"});
printName({name: "Joe", age: 32});