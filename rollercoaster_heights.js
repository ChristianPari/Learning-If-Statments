// create coasters array
// create coaster height limits array
// create riders array
// create rider heights array
// create a variable to set the boolean to
// create for loop
// create if else statement
// output if riders can ride

let coasters = ["Bizarro", "Peter Pan", "Rock n Roller Coaster"];
let coasterHeights = [48, 36, 60]
let riders = ["Caitlin", "Jimmy", "Nick"];
let riderHeights = [64, 30, 59];
let ableToRide;

for (let a = 0; a < coasterHeights.length; a++) {

    if (riderHeights[a] >= coasterHeights[a]) {
        ableToRide = true;
    } else {
        ableToRide = false;
    }

    if (ableToRide == true) {
        console.log(riders[a], "can ride!");
    } else {
        console.log(riders[a], "can't ride.");
    }

}