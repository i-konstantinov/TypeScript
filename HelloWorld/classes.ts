class Stark {
    name: String = "Peter";
    saying: string;
    static castle: string = "Winterfell";

    constructor() {
        this.saying = "Ahoy!";
    }

    greeting(person: string) {
        console.log("Hello " + person);
    }
}

var ned = new Stark();
ned.saying = "Winter is coming";
console.log(Stark.castle);
ned.greeting("Robert");

// classes are used to define the behaviour of our object in depth