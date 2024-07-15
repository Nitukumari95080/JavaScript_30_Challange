
//OPERATOR
/*

OPERATOR :- JavaScript is a dynamic programming language, has various operators to perform operations on data and manipulate values. 

TYPE :-
🌟Arithmetic Operators :- addition, subtraction, multiplication, division, and modulus.

📍Assignment Operators :-The most common assignment operator we use is '='.

🌟Comparison Operators :- greater then (>), less than (<), greater than or equal (>=), less than or equal (<=), equal to (==), not equal to (!=) are used to compare values and determine the relationship between them. These return a boolean value in the output.

📍Logical Operators :- used to connect two or more expressions/conditions to make decisions based on the criteria
(a) AND (&&) (b) OR (||) (c) NOT (!)

🌟Bitwise Operators :-used to do manipulation of individual bits within the binary representation of numbers.
(a) Bitwise AND (&) (b) Bitwise OR (|) (c) Bitwise NOT (~) (d)Bitwise XOR (^) (e) Left Shift (<<) (f) Right Shift (>>)

📍Ternary Operators :-It has three parts: a condition, statement to execute if the condition is true and the statement to execute if the condition is false.

SYNTAX :-//SYNTAX (condition) ? (statement1) : (statement2);

*/

//CHALANGE OPEREATOR

/* 
1.ADD TWO NUMBER
2.SUBTRAC TWO NUMBER
3.MULTIPLY TWO NUMBER
4.DIVISION TWO NUMBER
5.REMAINDER TWO NUMBER
*/
let number1 = 25;
let number2 = 36;
let number3 = 56;
//addtion
let sum = number1 + number2 + number3;
console.log(sum);    // 117
//subtract
let diff = number1 - number2;
console.log(diff);    // -11

//multiplication
let mul=number1*number2*number3
console.log(mul); //output :-50400

//division
let division=number1/number2;
console.log(division); // output :-0.6944444444444444

//remainder
let rem=number3%number1;
console.log(rem); //output :-6

//Assigment operator
let numb1=10
numb1+=20;
console.log(numb1);

numb1-=30;
console.log(numb1)

//Comparision operator

let x=50;
let y=30;

let gretterThan=x>y;
let smallerThan=y<x;
let equalTo=x==y;
let greterThanEqual=x>=y;
let smallerThanEqual=y<=y;
let equal=x===y;
let compare1=gretterThan&& smallerThan;
let compare2=greterThanEqual&&smallerThanEqual;
let compare3=equalTo&&equal;
console.log(gretterThan); //ourtput - true
console.log(smallerThan);//ourtput - true
console.log(equalTo); //ourtput - false
console.log(greterThanEqual); //ourtput - true
console.log(smallerThanEqual); //ourtput - true
console.log(equal); //ourtput - false
console.log(compare1); //ourtput - true
console.log(compare2); //ourtput - true
console.log(compare3); //ourtput - flase

              //Logical operator
let andOper=x&&y;
let orOper=x||y;
let notOper=x!=y;
console.log(andOper); //ourtput - true
console.log(orOper); //ourtput - true
console.log(notOper); //ourtput - true

let aler1 = false;
let aler2;
let aler3 = NaN;
let mySum = 45;
let gone = false;
let isFirst = true;
//and operator

let alert1 = true;
let alert2 = false;
let alert3 = true;

console.log(aler1 && alert2);    // false
console.log(aler2 && alert3);    // false
console.log(aler1 && alert3);    // true

let num1 = 0;
let num2 = 1;
let num3 = 1;

console.log(num1 && num2);    // 0
console.log(num2 && num3);    // 1
console.log(num1 && num3);    // 0
//or operator
let alert4 = false;
let alert5 = false;
let alert6 = true;

console.log(alert4 || alert5);    // false
console.log(alert5 || alert6);    // true
console.log(alert4 || alert6);    // true


console.log(num1 || num2);    // 1
console.log(num2 || num3);    // 1
console.log(num1 || num3);    // 0


//not operator
console.log(!alert1);      // true
console.log(!alert2);      // true
console.log(!alert3);      // true
console.log(!mySum);       // false
console.log(!gone);        // true
console.log(!isFirst);     // false

//Ternatry Operator
let myAge=21;

(myAge >= 18) ? (console.log("You are khadush")) : (console.log("you are not khadush"));












