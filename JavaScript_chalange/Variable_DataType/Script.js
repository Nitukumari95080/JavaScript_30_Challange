/*
        -----  Types of naming conventions -----
There are numerous variable naming conventions in the coding world, but among the most important are :

a) Camel Case

b) Pascal Case

c) Snake Case

d) Kebab Case





 LET :- let keyword is used to declare variables that are block-scoped, meaning they are only accessible within the block in which they are defined.

 VAR :-Variables declared with var are function-scoped or globally-scoped, but not block-scoped. When we declare a variable using var inside a function, we canot access the variable outside the function.

 CONST :-const keyword is used to declare constants. Constants are variables whose values cannot be reassigned once they are initialized.

*/

//VARIABLE CHALANGE

function example() {
    var x = 10;
    console.log(x);
}
example();       // 10
console.log(x);       // Throws ReferenceError: x is not defined


var num1=1234;
console.log(num1); //output:1234

let string="Hello ";
console.log(string); //output:'Hello'

const boolean=true
console.log(boolean); //output :true


/*
 ---------------------------------    DATA TYPE  -------------------------------------------
 
Type	     typeof return value	Object wrapper
Null	       "object"	               N/A
Undefined	   "undefined"             N/A
Boolean	       "boolean"	           Boolean
Number	       "number"	           Number
BigInt	       "bigint"	           BigInt
String	       "string"	           String
Symbol	       "symbol"	           Symbol
*/

// Numbers:
let length = 16;
let weight = 7.5;
console.log(length);//outpur :- 16
console.log(weight); //outpur :- 7.5
console.log(typeof length)//outpur :- number    
console.log(typeof weight)//outpur :-number

// Strings:
let color = "Yellow";
let lastName = "Green";
console.log(color);//outpur :-Yellow
console.log(lastName);//outpur :-Green
console.log(typeof color);//outpur :-string
console.log(typeof lastName);//outpur :-string

// Booleans
let z = true;
let y = false;
console.log(z);//outpur :- true
console.log(y);//outpur :-flase
console.log(typeof z);//outpur :- boolean

// Object:
const person = {
    firstName:"Topeer", 
    lastName:"Girl"
};
console.log(person); //outpur :- { firstName: 'Topeer', lastName: 'Girl' }
console.log(person.firstName);//outpur :-Topper
console.log(person.lastName);//outpur :-Girl
console.log(typeof person)//outpur :-object

// Array object:
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars); //outpur :-[ 'Saab', 'Volvo', 'BMW' ]
console.log( typeof cars); //outpur :- Array

// Date object:
const date = new Date("2022-03-25");
console.log(date)//outpur :-2022-03-25T00:00:00.000Z
console.log(typeof date);//outpur :-object





/*
      ---------------------           REASSIGNING VARIABLE----------------------------
VAR :-var keyword allows variables to be both reassigned and redefined within the same scope

LET :- Variables declared with let can be reassigned, just like those declared with var, but they cannot be redeclared within the same block scope. 

CONST :-Constants are variables whose values cannot be reassigned once they are initialized. This means that once a value is assigned to a constant using const, it cannot be changed. 
*/

//Reassigning Variable USING LET
let x = 5;
console.log(x);  // Output: 5

x = 10;
console.log(x);  // Output: 10


// Re definition using VAR
var m = 10;
console.log(x);    // Output : 10

var m = "Mayank";
console.log(m);    // Output : Mayank



// Re definition using VAR

const c = 20;
console.log(c);      // Output : 20

x = 30;
console.log(c);      // Output : Error!



