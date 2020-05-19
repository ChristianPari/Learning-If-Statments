// create a variable as a company name
// create an array of trades
// create an array of tradesman
// create an array of tradesman cost per hour
// create a nested array for each tradesman hours worked for a 5 day work week
// create an array for total income for each tradesmen
/* 
output: 
[^]company name (own line) 
[^]each tradesmen and his trade 
[^]how much they charge per hour 
[^]how many total hours they worked this week
[^]how much money they made this week
[^]how much the company tradesmen made as a whole for the week (not practical but another variable for practicing)
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