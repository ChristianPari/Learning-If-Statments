// create a variable as a company name
// create an array of trades
// create an array of tradesman
// create an array of tradesman cost per hour
// create a nested array for each tradesman hours worked for a 5 day work week
// create an array for total income for each tradesmen

/*
! NOW 
! [^]create an if else statement for a possible customer that needs electrical work done
! [^]create customer variable for how much money they have to spend total, 
! the job she needs done will take the electrician 5 hours to complete
! [^]if they can afford his rate output "can afford this electrician!"
! [^]if they cannot afford hir rate output "cannot afford this electrician."
! [^]try to have this output as a scenario; customer needs elect. for 5 hours of work and because they have x amount of money they (true or false)
*/

/* 
 * output: 
 * [^]company name (own line) 
 * [^]each tradesmen and his trade 
 * [^]how much they charge per hour 
 * [^]how many total hours they worked this week
 * [^]how much money they made this week
 * [^]how much the company tradesmen made as a whole for the week (not practical but another variable for practicing)
 * [^]create if else statements
 * [^]did it output correctly??????? If true, console.log("Shweet!"); lol
 */

let companyName = "Pari and Tradesmen";
let trades = ["Plumbing", "Electrical", "H-VAC", "Carpentry"];
let tradesmen = ["Billy", "Bob", "Mo", "Larry"];
let tradesmenCostPerHour = [50, 30, 40, 35];
let workWeekHours = [ // 5 days of work ours
    [8, 9, 11, 6, 7],
    [6, 10, 9, 8, 8],
    [8, 8, 8, 9, 10],
    [3, 13, 7, 8, 8]
];
let totalWorkedHours = 0;
let income = 0; // income for whole company as a group

console.log("The company '" + companyName + "' has the following tradesmen:");

for (let c = 0; c < workWeekHours.length; c++) {

    totalWorkedHours = workWeekHours[c][0] + workWeekHours[c][1] + workWeekHours[c][2] + workWeekHours[c][3] + workWeekHours[c][4];

    console.log(tradesmen[c], "the", trades[c], "tradesmen charges $" + tradesmenCostPerHour[c], "an hour and worked a total of", totalWorkedHours + " hours this week making a total of $" + (totalWorkedHours * tradesmenCostPerHour[c]) + ".");

    income += (totalWorkedHours * tradesmenCostPerHour[c]);

}

console.log("The total income brought in by all these tradesmen was $" + income + ".");

let homeOwner = "Dave"; // needs electrical work done
let budget = 200; // total he can spend
let workNeededInHours = 5; // job length in time (hours)

if (budget >= (tradesmenCostPerHour[1] * 5)) {
    console.log("\nA home owner named", homeOwner, "needs 5 hours worth of electrical work done.", homeOwner, "can afford", tradesmen[1] + "'s hourly cost!");
} else {
    console.log(homeOwner, "cannot afford", tradesmen[1] + "'s hourly cost, keep looking.");
}