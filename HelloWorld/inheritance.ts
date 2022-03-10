class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    dance() {
        console.log(this.name + " is dancing");
    }
}
var bran = new Person("Bran");
bran.dance();


//this class will inherit all the props of the extended one
class AwesomePerson extends Person {}
var robb = new AwesomePerson("Robb");
robb.dance();


//we can overwrite the dance method
class Dancer extends Person {
    dance(): void {
        console.log(this.name+" is a dancer!")
    }
}
let arya = new Dancer("Arya");
arya.dance();
