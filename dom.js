const img = document.querySelector('img');
console.dir(img);

img.scr

img.src = './image/FIFA2.webp';

const img2 = document.querySelector(' div img');
console.dir(img2);

img2.src

img2.src ='./image/Gaberiel Jesus.jpg';


console.error('this page is not found')

const h1 = document.querySelector('h1');
h1.innerText


h1.innerText = 'Im hungry'
console.log(h1);

const ul = document.querySelector('ul');
ul.innerText
console.dir(ul);

const li = document.querySelector('ul li.special');
li.innerText
li.textContent = 'i am a big boy!!'
console.log(li);

li.style
li.style.color = 'green';

const p = document.querySelector('p.special');
p.innerText = 'The big boy club!!'
console.dir(p);

p.style
p.style.color = 'yellow'

const form = document.querySelector('form');

form.innerHTML

const inputs = document.querySelectorAll('input');
inputs
inputs[0].value
inputs[1].value
inputs[2].checked
inputs[3].placeholder

inputs[1].placeholder = 'please kindly enter your password';

const range = document.querySelector('input[type="range"]');



range.getAttribute('max');

range.getAttribute('min');

range.getAttribute('type');

range.setAttribute('type', 'radio');


const firstLi = document.querySelector('li');

firstLi

firstLi.parentElement

firstLi.parentElement.parentElement;

const secondLi =firstLi.nextElementSibling.nextElementSibling
const thirdLi = document.querySelector('section ul li.special');
thirdLi
thirdLi.style.backgroundColor= 'red';
thirdLi.style.fontSize= '40px';
thirdLi.style.width = '80px';
thirdLi.style.color= 'green';


const fourthLi = document.querySelector('div ul li')
fourthLi;
fourthLi.nextElementSibling;
fourthLi.style.color = 'purple';
fourthLi.nextElementSibling.style.color='blue'
fourthLi.nextElementSibling.nextElementSibling;
fourthLi.style.color='purple';
fourthLi.nextElementSibling.nextElementSibling.style.color='indigo';
fourthLi.nextElementSibling.nextElementSibling.style.fontSize='26px';




const newh2 = document.createElement('h2');
console.dir(newh2);


newh2.innerText = 'I like animals';
newh2.classList.add('special');
newh2.classList.remove('special');
const createButton = document.createElement('button');
createButton.classList.add('btn-ghost');
createButton.innerText = 'wisdom';
const section = document.querySelector('section');
section.appendChild(newh2);
section.appendChild(createButton);


const date = document.querySelector('div input[type="date"]');
date.getAttribute('type')
date.setAttribute('type', 'checkbox')



const newh3 = document.createElement('h3');
console.dir(newh3);

newh3.innerText = 'i am in love with an angel';
newh3.classList.add('special');
const div = document.querySelector('div');
div.appendChild(newh3);

const fifthli = document.querySelector('div ul');
fifthli;
fifthli.nextElementSibling;
fifthli.nextElementSibling.nextElementSibling;
fifthli.nextElementSibling.nextElementSibling.nextElementSibling.innerText ='Star';








