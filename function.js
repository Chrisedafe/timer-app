function logger() {
    console.log('you are a winner!!');
}


logger();
logger();
logger();

function information(firstName, lastName) {
    console.log(`my name is ${firstName} ${lastName}`);
}

information('peter', 'perry');
information('laycon', 'samuel');

function cutFruitPieces(fruit) {
    return fruit * 4;
}



function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces}`
    return juice;
   
}

console.log(fruitProcessor(5, 12));


function calcAge(birthYear) {
    return 2023 - birthYear
}



const ageCalc1 = calcAge(1995);
const ageCalc2 = calcAge(1990);
console.log( ageCalc1, ageCalc2);

// Arrow function

const calcAge1 = birthYear => 2023 - birthYear;
const ageCalc3 = calcAge1(1992);
console.log(ageCalc3);


const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 65 - age;
    return ` ${firstName} retires in ${retirement} years.`
}

console.log(yearsUntilRetirement(1960, 'peter'));
console.log(yearsUntilRetirement(1962, 'bob'));



    const classObj = {
        firstName: 'larry',
        lastName: 'gaga',
        age: 2023 - 1996,
        favouriteFood: 'jellof rice',
        favoriteColor: 'pink',
        socialMedia: 'larry@gaga.com',
        email: 'programingwithlarry@gmail.com'
    }
    
console.log(classObj);


function obj() {
    const tip = `My name is ${classObj.firstName} ${classObj.lastName}, i am ${classObj.age} years old, my favorite food is ${classObj.favoriteFood} and my 
    favorite color is ${classObj.favoriteColor}. you can always chat me up on muy instagram with my IG handle of ${classObj.socialMedia}, then send me a private message on my ${classObj.email}`
    return tip;
}

const il = obj();
console.log(il);
 
const magicsquare = [
    [2, 6, 7],
    [9, 5, 1],
    [4, 3, 8]
]

console.log(magicsquare);

for(let i = 0; i < magicsquare.length; i++) {
    console.log(magicsquare[1]);
}



const calcAverage = (a, b, c) => (a + b + c) /3;

let scoreDolphin = calcAverage(44, 23, 71);
let scoreWarrior = calcAverage(65, 54, 49);
console.log(scoreDolphin, scoreWarrior);

const checkWinner = function(avgDolphins, avgWarrior) {
    if (avgDolphins >= 2 * avgWarrior) {
        console.log(`Dolphin wins ${avgDolphins} vs ${avgWarrior}`);
    } else if (avgWarrior >= 2 * avgDolphins){
        console.log(`warrior win ${avgWarrior} vs ${avgDolphins}`);
    } else {
        console.log('No team wins!!!');
    }
}

checkWinner(scoreDolphin, scoreWarrior);
    






