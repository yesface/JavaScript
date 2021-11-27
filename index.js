"use strict";

// Home work

const dScore1 = Number(prompt('Enter Dolphin first score'));
const dScore2 = Number(prompt('Enter Dolphin Second score'));
const dScore3 = Number(prompt('Enter Dolphin third score'));

const avDScore = ((dScore1 + dScore2 + dScore3) / 3);

console.log(`The avergae score for Dolphin team is ${avDScore}`);

const kScore1 = Number(prompt('Enter Koala first score'));
const kScore2 = Number(prompt('Enter Koala Second score'));
const kScore3 = Number(prompt('Enter Koala third score'));

const avKScore = ((kScore1 + kScore2 + kScore3) / 3);

console.log(`The average score for Koala team is ${avKScore}`);

if (avDScore > avKScore){
    console.log(`The average score for Dolphin is higer than Koala's in all 3 games, Hence Dolphin team is the Winner!!!`);
}else if(avDScore == avKScore){
    console.log(`Ops! there's a tie here... Hence there's no Winner yet`);
}else{
    console.log(`Yipee!! Koala team won the game`);
}

//Using Data Bonus 1

const dNewScore1 = Number(prompt('Enter Dolphin New first score'));
const dNewScore2 = Number(prompt('Enter Dolphin New Second score'));
const dNewScore3 = Number(prompt('Enter Dolphin New third score'));

const avDNewScore = ((dNewScore1 + dNewScore2 + dNewScore3) / 3);

console.log(`The New avergae score for Dolphin team is ${avDNewScore}`);

const kNewScore1 = Number(prompt('Enter Koala New first score'));
const kNewScore2 = Number(prompt('Enter Koala New Second score'));
const kNewScore3 = Number(prompt('Enter Koala New third score'));

const avKNewScore = ((kNewScore1 + kNewScore2 + kNewScore3) / 3);

console.log(`The New average score for Koala team is ${avKNewScore}`);

const miniScore = 100;

if (avDNewScore > avKNewScore && avDNewScore >= miniScore){
    console.log(`Dolphin team is the Winner!!!`);
}else if(avKNewScore >= miniScore){
    console.log(`Koala team is the Winner`);
}else{
    console.log(`There is no winner`);
}

 
//Using Data Bonus 2

const dNewBScore1 = Number(prompt('Enter Dolphin New Bonus first score'));
const dNewBScore2 = Number(prompt('Enter Dolphin New Bonus Second score'));
const dNewBScore3 = Number(prompt('Enter Dolphin New Bonus third score'));

const avDNewBScore = ((dNewBScore1 + dNewBScore2 + dNewBScore3) / 3);

console.log(`The New avergae score for Dolphin team is ${avDNewBScore}`);

const kNewBScore1 = Number(prompt('Enter Koala New Bonusfirst score'));
const kNewBScore2 = Number(prompt('Enter Koala New Bonus Second score'));
const kNewBScore3 = Number(prompt('Enter Koala New Bonus third score'));

const avKNewBScore = ((kNewBScore1 + kNewBScore2 + kNewBScore3) / 3);

console.log(`The New average score for Koala team is ${avKNewBScore}`);

if (avDNewBScore == avKNewBScore && avDNewBScore > miniScore ){
    console.log(`Ops! There's a tie and no Winner`);
}else if (avDNewBScore > avKNewBScore && avKNewBScore > miniScore) {
    console.log(`Dophin team is the Winner !!!`);
}else {
    console.log(`Koala is the Winner`);
}