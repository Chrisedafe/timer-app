for(let i = 1; i <= 10; i += 3) {
    console.log('hello world!!', i);
}

for(let num = 1; num <20; num++) {
    console.log(`${num}+${num} = ${num + num}`);
}

for(let i = 200; i >= 0; i -= 20) {
    console.log(i);
}

const gameBoard = [
    [4, 32, 500, 4,],
    [64, 8, 22, 78],
    [8, 32, 6, 89]
];

console.log(gameBoard);

for(let i = 0; i < gameBoard.length; i++) {
    console.log(gameBoard[i]);
}


let subredits = ['soccer', 'pophead', 'cringe', 'books'];

for(let i = 0; i < subredits.length; i++) {
    console.log(subredits[i]);
}



let j = 0;
while (j <= 5) {
    console.log(j);
    j++;
}


const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);
while(guess !== target) {
    console.log(`Target: ${target} Guess: ${guess}`);
    guess = Math.floor(Math.random() * 20);
}


console.log(`Target: ${target} Guess: ${guess}`);
console.log('CONGRATULATION YOU WIN!!');


