//! this program is for BOOLEANS

let name = "Steven";
let age = 21;
let neighborhood = [];
let isOldEnoughToDrink;

//booleans go hand in hand with if statements

if (age >= 21) { // having the if statement check if the data from variable 'age' is greater than or equal to 21
    isOldEnoughToDrink = true;
} else {
    isOldEnoughToDrink = false;
}

if (isOldEnoughToDrink == true) { // if statement checks a 'condition' which is always within the '()' of the if statement after the variable
    console.log("You may buy.");
} else { // else statements aren't always after if statements but are used to output something when the boolean comes back false
    console.log("Sorry, no liqour for you.");
}