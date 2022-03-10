var n : Number = 1;

var isWinter: boolean;
isWinter = true;

let count : number;
count = 5;

var firstName : String = "John";

var names : string[] = ["John", "Peter", "Mary"];
var randomList : any = [1, "asd", 4.5];

// "enum" is a easy way to store built-in variables
// gives us a set of keys that we can refer to throughout
enum Starks { John, Bran, Eddy, Catlyn };
var cat : Starks = Starks.Catlyn;


// the type tells us what is the function going to return
function getName() : string {
    return "Jim";
}
// type void is used when a function doesn't return anything;
function myFunc() : void {
    console.log('Hello from myFunc');
}