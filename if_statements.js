// if statements
// equality operators and assignment operators
// logical operators

/**********************************************/
// first example
//! keywords PROMPT and ALERT are used for html, will cause error within plain JS
//* let num = prompt("Enter a number!"); // gives a popup for a user to enter a number, assigns the value received to 'num' variable
// create if statement that checks if my 'num' is positive or negative #
//* if (num > 0) { // if true, will run whats in the code block {}, if false will run next statement and so on
//*     alert("The number is positive"); //    console.log gives a popup with information
//* } else if (num === 0) {
//*     alert("The number is zero");
//* } else {
//*     alert("The number is negative");
//* }

/**********************************************/

//* let isRaining = prompt("Is it raining?");

//* if (isRaining === "yes") {
//*     alert("Take an umbrella!");
//* } else {
//*     alert("You good fam, no need for an umbrella!");
//* }

/*********************************************/

// one equal sign = is for assinging value to a variable
// two equal signs == is for comparison or equality checking

/**********************************************/

//! Logical operators
// && and, || or, ! not

/*
true && true == true
true && false == false
false && true == false
false && false == true

true || true == true
true || false == true
false || true == true
false || false == false

!true == false
!false == true

*/

let name = "Guy";
let age = 18;
let highSchoolGrad = true;
// JOB AT APPLE
// JOB REQUIREMENTS: over 18 and a high school diploma

if (age >= 18 && highSchoolGrad === true) { // must both be true to run
    console.log("You can apply for this job!");
} else {
    console.log("You can't apply for this job.");
}

let name2 = "Billy";
let age2 = 21;
let highSchoolGrad2 = false;
// JOB AT AMAZON
// JOB REQUIREMENTS: over 18 or high school degree

if (age >= 18 || highSchoolGrad2 === true) { // either of these conditions need to be true for the code block to run
    console.log("You can apply for this job!");
} else {
    console.log("You can't apply for this job.");
}

/***********************************************/