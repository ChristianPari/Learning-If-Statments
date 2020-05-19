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
!! Expand on if else statements and now make an array of home owners who need work done in each trade field and have the output list wether they can
!! or cannot afford each tradesmen
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

console.log("The company '" + companyName + "' has the following tradesmen:\n");

for (let c = 0; c < workWeekHours.length; c++) {

    totalWorkedHours = workWeekHours[c][0] + workWeekHours[c][1] + workWeekHours[c][2] + workWeekHours[c][3] + workWeekHours[c][4];

    console.log(tradesmen[c], "the", trades[c], "tradesmen, and he charges $" + tradesmenCostPerHour[c], "an hour and worked a total of", totalWorkedHours + " hours this week making a total of $" + (totalWorkedHours * tradesmenCostPerHour[c]) + ".");

    income += (totalWorkedHours * tradesmenCostPerHour[c]);

}

console.log("The total income brought in by all these tradesmen was $" + income + ".");

let homeOwner = ["Jasmine", "Dave", "Carl", "Steve"]; // needs work done
let budget = [300, 200, 150, 400]; // total they can each spend
let workNeededInHours = [7, 5, 4, 11]; // hours each job will take

console.log("\nWe have a list of home owners that need some sort of work done in their homes. Which home owners are able to afford the work that needs to be done?\n");

for (let i = 0; i < budget.length; i++) {

    if (budget[i] >= (tradesmenCostPerHour[i] * workNeededInHours[i])) {
        console.log("A home owner named", homeOwner[i], "needs", workNeededInHours[i], "hours of", trades[i], "work done.", homeOwner[i], "can afford", tradesmen[i] + "'s hourly cost!");
    } else {
        console.log("A home owner named", homeOwner[i], "needs", workNeededInHours[i], "hours of", trades[i], "work done.", homeOwner[i], "cannot afford", tradesmen[i] + "'s hourly cost, keep looking.");
    }
}