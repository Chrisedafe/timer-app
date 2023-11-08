const johnObject = {
    firstName: 'john',
    lastName: 'doe',
    age: 2023 - 1996,
    occupation: 'Medical Doctor',
    friends:['micheal', 'peter', 'steven', 'greg']
}

console.log(johnObject);

const johnArray = [
    'john',
    'doe',
    2023-1996,
    'Medical Doctor'
    ['micheal', 'peter', 'steaven' , 'greg']
]

// Dot notation
console.log(johnObject.firstName);

// Bracket notation
console.log(johnObject['firstName']);

johnObject.location = 'spain';
johnObject.socialMedia = '@johndoe';

//use the template string literals to print to the console 
//john has 4 friends and his best friend is micheal
//john is 27 years old and he is a medical doctor. and he lives in spain
//and his social media handle is @johndoe.

console.log(johnObject);
console.log(`john has ${johnObject.friends.length}friends and his best friend is ${johnObject.friends[0]}, john is ${johnObject.age}, and he is a ${johnObject.occupation}. and he 
lives in ${johnObject.location} and his social media handle is ${johnObject.socialMedia}.`)

// assingnment 
// create a key value pairs method of a sickPatient
//1.firstName
//2.lastName
//3.healthStatus
//4.age
//5.Gender
//6. Genotype

// retrieve using the dot notation to get the firstName, healthStatus
//age.
//use the bracket notation to retrieve the gender, genotype
//assign a new key value pair into the object method of,
//residence, stateOforigin, medicalAppointment['mon', 'thur', 'sat' ]
//print to the console using the template literals:
//my name is firstName, lastName,
//im 23 years old and im currently
//treating malaria, and im from
//benue. my next doctor appointment is going to be on thursday


