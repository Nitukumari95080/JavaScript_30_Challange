/*


*/
//check positive ,negative or zero

let num = prompt("Please enter any number:");

function number(num) {
    num = parseFloat(num); // Ensure the input is treated as a number
    if (isNaN(num)) {
        console.log("Please enter a valid number.");
    } else if (num > 0) {
        console.log(num + " is positive");
    } else if (num < 0) {
        console.log(num + " is negative");
    } else {
        console.log(num + " is zero");
    }
}

number(num); // Pass the input as an argument to the function


//age check for vote

let yourAge=prompt("Please enter Your Age:")
function checkEligbleTovole(yourAge){
    yourAge = parseFloat(yourAge);
    if(yourAge>=18){
        console.log('Your are elegible for vote');
    }
    else{
        console.log('Your are not elegible for vote');   
    }
}
checkEligbleTovole(yourAge);


//check largest number

let Number1=prompt('Enter any number1 :- ')
let Number2=prompt('Enter any number2 :- ')
let Number3=prompt('Enter any number3 :- ')
function largestNumber(Number1,Number2,Number3){
   Number1=parseInt(Number1);//5
   Number2=parseInt(Number2);//10
   Number3=parseInt(Number3);//4
   if(Number1>Number2){
     if(Number1>Number3)
        console.log(`${Number1} :- is Largest Number`)
      else
        console.log(`${Number3} :- is Largest Number`)
   }else
   {
    if(Number2>Number3){
        console.log(`${Number2} :- is Largest Number`)
     }else{
         console.log(`${Number3} :- is Largest Number`)
     }
   }
}
largestNumber(Number1,Number2,Number3);



//Switch case

let weekNumber=prompt('Enter any number for week like 1,2,3...:-')
function weekPrint(weekNumber){
    weekNumber=parseInt(weekNumber)
    if(weekNumber >= 1 && weekNumber <= 7){
      switch (weekNumber) {
         case 1:
             console.log('weekNumber 1 then print:- Monday');
             break;
         case 2:
             console.log('weekNumber 2 then print:- Tuesday');
             break;
         case 3:
             console.log('weekNumber 6 then print:-Wednesday');
             break;
         case 4:
             console.log('weekNumber 3 then print:- Thirsday');
             break;
         case 5:
             console.log('weekNumber 4 then print:- Friday');
             break;
         case 6:
             console.log('weekNumber 5 then print:- Saturday');
             break;
         case 7:
             console.log(`Week number 7 then print: Sunday`);
             break;
         default:
             console.log('Invalid number') ;
        }
     }else{
        console.log('Please enter a valid week number between 1 and 7.');
    }
    
 }
 weekPrint(weekNumber)



let score=prompt('Enter any marks for  like 60,82,43...:-')
function weekPrint(score){
   score=parseInt(score)
   if(score <=100){
     switch (score) {
        case 90:
            console.log(`score 90 then print:- 'A'`);
            break;
        case 80:
            console.log(`score 80 then print:- 'B'`);
            break;
        case 60:
            console.log(`score 60 then print:- 'C'`);
            break;
        case 45:
            console.log(`score 45 then print:- 'D'`);
            break;
        case 30:
            console.log(`score 30 then print:- 'E'`);
            break;
        default:
            console.log('Invalid number') ;
       }
    }else{
       console.log('Please enter a valid week number.');
   }
   
}
weekPrint(score)


//Ternary operator

let numb =prompt(`Enter any Number...`);
numb=parseInt(numb);
(numb%2==0) ? (console.log(`${numb} :- is a even number`)) :(console.log(`${numb} :- is a even number`));


//combine condition

let year=prompt(`Enter any year...`);
function leapYear(){
    if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
        console.log(`${year} is a Leap year.`)
    }else{
        console.log(`${year} is a not Leap year.`)
    }
}
leapYear(year);