const hasDriverLicense= true;
const hasGoodVision= false

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasGoodVision);


if (hasDriverLicense && hasGoodVision){
    console.log('he can drive');
} else {
    console.log('he should not drive');
}


//There are two basketball teams, :Dolphins and Warriors.
//they compete against each other  3 times. The Winner with 
//the highest average score wins a trophy!

//1. calculate the teams average score to determine the winner of the competition,
//and print it to the console. there can also be a draw, (darw mean they have the same average score)

//2. Include a require for a minimum score of 100. with this a team also wins if it has a higher score than the other team, and the same 
//time a score of at least 100 point. HINT: use a logical operator to test for a minimum score, as well as multiple else-if block.

//3. minimum score also applies to a draw! so the draw only and both have a score greater or equal 100 points. otherwise
//no team wins 

//TEST DATA: Dolphin score 96, 108, 89.
// warriors score 89, 91,110
// TEST DATA: Dolphin score 97, 112, 101.
// Warrior score 109, 95, 123
 //TEST DATA: Dolphin score 97, 112, 81,.
 //Warrior score 109, 95, 86

 const scoreDolphin = (96 + 108 + 89) / 3;
 const scoreWarrior = (89 + 91 + 110) / 3;



 const scoreDolphin1 = (97 + 112 + 101) / 3;
 const scoreWarrior1 = (109 + 95 + 123) / 3;


 const scoreDolphin2 = (97 + 112 + 81) / 3;
 const scoreWarrior2 = (109 + 95 + 86) / 3;


 console.log(scoreDolphin, scoreWarrior);
 console.log(scoreDolphin1, scoreWarrior1);
 console.log(scoreDolphin2, scoreWarrior2);


 if (scoreDolphin > scoreWarrior) {
    console.log('Dolphin wins the trophy');
 } else if (scoreWarrior > scoreDolphin) {
    console.log('warrior wins the trophy');
 } else if (scoreDolphin === scoreWarrior) {
    console.log('Both wins the trophy');
 }


 if (scoreDolphin1 > scoreWarrior1 && scoreDolphin1 >= 100) {
    console.log('Dolphin wins the trophy');
 } else if (scoreWarrior1 > scoreDolphin1 && scoreWarrior1 >= 100) {
    console.log('warrior wins the trophy');
 } else if (scoreDolphin1 === scoreWarrior1) {
    console.log('both wins the trophy');
 }

 if (scoreDolphin2 > scoreWarrior2 && scoreDolphin2 >= 100) {
    console.log('Dolphin wins the trophy');
 } else if (scoreWarrior2 > scoreDolphin2 && scoreWarrior2 >= 100) {
    console.log('warrior wins the trophy');
 } else if (scoreDolphin2 === scoreWarrior2) {
    console.log('No one wins the trophy ! It was a draw');
 }
 

