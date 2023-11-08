alert('This page says hello!!')

const toyotaRace = (90 + 76 + 89) /3;
const benzRace = (150 + 200 + 250) /3;
const ferrariRace = (165 + 290 + 310) /3;
const buggatiRace = (200 + 340 + 450) /3;


console.log (toyotaRace);
console.log (benzRace);
console.log (ferrariRace);
console.log (buggatiRace);

if (toyotaRace > benzRace || benzRace > toyotaRace){
    console.log(`Benz wins the race with ${benzRace} points.
    `)
}  if (benzRace > ferrariRace || ferrariRace > benzRace){
    console.log(`Ferrari wins the race with ${ferrariRace} points.`)
}  if  (ferrariRace > buggatiRace || buggatiRace > ferrariRace){
    console.log(`Bugatti wins the race with ${buggatiRace} points.`)
}


3 + 4
if (23 > 10) {
    const str = '23 is bigger';
}

const me = 'prosper';
console .log(`i'm ${2037-1991}`)

const age = 18

age >= 18 ? console.log ('I am allowed to drink wine!') :
console.log ('I wont be able to drink anything alcholic');


let drink;
if (age >= 18) {
    drink = 'wine';
} else {
    drink = 'water';
}

console.log(drink);



/*
steaven wants to build a very tip calculator for whenever he goes in a resturant. in his country,
its usual to tip 15% if the bill value is between 50-300. if the bill value is different, the tip 20%.


1. your task is to calculate the tip. depending oon the bill value. create a variable called 'tip' for this.
use ternary operator.

2. print a string a console containing the bill value 
the tip, and final value (bill + tip).
example: the bill was 275 and the tip is 41.25, get the total value

hint: to calculate 20% value , simply multiply 20/100 
*/
const bill = 300;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 :
bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}. and the total value  is ${bill + tip}.`)



const speed = 20;

speed >=20 ? console.log ('you are the winner'):
console.log ('you are not the winner');


const numOne = 40;
const numTwo = 55;

numTwo > numOne ? console.log ('numTwo is greater than numOne'):
console.log ('numOne is greater than numTwo');

numTwo === numOne || numOne === numTwo ? console.log ('numTwo is not equal to numOne'):
console.log ('numOne is not equal to numTwo');


const day = 'monday';

switch (day) {
    case 'monday':
        console.log('i go to work');
        break;
    case 'tuesday':
        console.log('i go for meeting');
        break;
    case 'wednesday':
        console.log('i go for professional events');
        break;
    case 'thursday':
        console.log('i play table tennis');
        break;
    case 'friday':
        console.log('i go to club');
        break;
    case 'saturday':
    case 'sunday':
        console.log('i enjoy my weekend');
        break;
        default:
            console.log('nun os these days exist!!')
}




if (day === 'monday') {
    console.log('i go to work');
} else if (day === 'tuesday') {
    console.log('i go for my meetings');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('i play table tennis');
} else if (day === 'friday') {
    console.log('i go to club');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('i enjoy my weekend');
} else {
    console.log('none of these days exist!!');
}





