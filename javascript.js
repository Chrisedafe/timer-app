const friends=[
    'femi',
    'micheal',
    'favor',
    'steven',
    'hillary',
    'ben',
    'jason',
];

console.log(friends);
friends.shift('femi');
friends.shift('micheal');
friends.push('ayra starr', 'tiwa savage');
console.log(`I have ${friends.length} friends and my best friend is ${friends[5]}. I and ${friends[2]} went for hikking during the holidays, `);


const davidoPersonality = [
    'David',
    'Adeleke',
    'Artist',
    30,
    'Married',
    ['Flying jet', 'Football','Dressing']
];

console.log(davidoPersonality);
console.log(`my Name  is ${davidoPersonality[0]}) ${davidoPersonality[1]} Im an ${davidoPersonality[2]},
I'm ${davidoPersonality[2]}, I'm ${davidoPersonality[3]}years old, I'm happily ${davidoPersonality[4]} and my favorite hobbies are ${davidoPersonality}`)



const numbersArray=[
    100,
    200,
    250,
    300,
    350,
    400,
    500,
    550,
    600,
    700,
];

console.log(numbersArray);
numbersArray.shift(100);
numbersArray.shift(200);
numbersArray.shift(250);
numbersArray.push(750,800,850,900,950,1000);

let myMap = new Map();
myMap.set('firstName', 'David');
myMap.set('lastName', 'adeleke');
myMap.set('occupation', 'artist');
myMap.set('age', 30);
myMap.set('status', 'married');
myMap.set('hobbies', ['flying jet', 'swimming','football']);

console.log(myMap);

const playlist = new Map();
playlist.set('Fireboy', 'Girlfriend');
playlist.set('odomodublack', 'MCOLUOMO');
playlist.set('Ducan Mighty', 'ph boys');

console.log(playlist);


const age = 15;

if (age !=18) {
    console.log('yoy just became an adult')
} else if (age == 18){
    console.log('you are an adult')
} else {
    console.log('you are not yet an adult')
}
// if (age == 18) console.log('you just became an adult')

alert('Hello World!');

const favouriteNumber = prompt('what is yoyur favourite number')
console.log(favouriteNumber);

if  (favouriteNumber == 23){
    console.log('cool! is an amazing number')
} else if (favouriteNumber == 9) {
    console.log('9 is also a cool number');
} else {
    console.log('No favorite number');
}

const age1 = 15;

if (age1 >= 18) {
    console.log ('you are eligible to have a driver license');
} else {
    const yearsleft = 18 - age1;
    console.log(`Wisdom has ${yearsleft} years to get his drivers license`);
}

const birthYear = 1999;
let century;
if (birthYear <= 2000) {
    century=20;
} else{
    century = 21;
}

console.log(century);

let rating = 3;

if (rating === 3){
    console.log('you are a superstar');
} else{
    console.log('you are not yet a superstar')
}
// 1. print a nice output to the console. saying who has the higher BMI. the message can either be mark BMI is higher than John or Example: mark BMI i(28.3) is higher than john BMI


const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95
const BMIMark = massMark/heightMark **2
const BMIJohn =massJohn/(heightJohn*heightJohn);
const markHigherBMI=BMIMark > BMIJohn;
console.log(BMIMark,BMIJohn,markHigherBMI)

if(BMIMark > BMIJohn){
    console.log ('BMIMark is greater than BMIJohn');
}else {
    console.log ('BMIMark is lesser than BMIJohn');
}

if(BMIMark > BMIJohn) {
    console.log(`Mark BMI (${BMIMark}) is greater than john BMI(${BMIJohn})`);
}else{ 
    console.log(`john BMI(${BMIJohn})is lesser than mark BMI(${BMIMark})`);
}

console.log(`${BMIMark} is higher than ${BMIJohn}`);




 //1. assignment
 const numberOne =800;
 const numberTwo =890;
 console.log(numberOne,numberTwo)

 if(numberTwo > numberOne) {
    console.log('numberTwo is greater than numberOne')
 }else{
    console.log('numberTwo is lesser than numberOne')
 }

 if(numberTwo > numberOne) {
    console.log(`numberTwo (${numberTwo}) is greater than numberOne(${numberOne})`)
 }

 // use the comparison operator in an if else statement condition
 // to compare if numberone is greater than numbertwo


 //2. assignment 

 const liyaArray = [
    'Aaliya',
    'la FlameJnr',
    2023-1996,
    'Accountant',
    ['swimming', 'cooking', 'jogging', 'bowling'],
    ['daniella', 'wisdom', 'choice', 'alice', 'stephnie']
 ];

 console.log(liyaArray);
 console.log(liyaArray[0], liyaArray[1], liyaArray[2], liyaArray[3])
 console.log(`My name is ${liyaArray[0]} ${liyaArray[1]} i am ${liyaArray[2]} n years old, i am an ${liyaArray[3]},i love ${liyaArray[4]}. i have 5 friends
 my best friend is choice`)

 // Retrieve firstname, lastname, age, and occupation
 // print to the statements using template literals:
 // my name is Aaliya la FlameJnr i am 27 years old, i am an accountant,
 // i love, cooking, swimming, jogging and bowiling . i have 5friends
 //my best friend is choice
 
 
 



