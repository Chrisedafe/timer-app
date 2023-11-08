
const sickPatient = {
    firstName: 'Buhari',
    lastName: 'Ahmed',
    healthStatus: 'Malaria',
    age:        2023-1996                                                                                                                ,
    gender: 'Male',
    Genotype: 'AA'
}

console.log(sickPatient);

//Dot notation
console.log(sickPatient.firstName, sickPatient.healthStatus, sickPatient.age)

//Brackets notation
console.log(sickPatient['gender' ], sickPatient['Genotype'])

sickPatient.residence = 'Apo',
sickPatient.stateOforigin = 'Delta',
sickPatient.medicalAppointment = ['monday', 'thursday', 'saturday']

console.log(`My name is ${sickPatient.firstName}, ${sickPatient.lastName},
 i am currently treating ${sickPatient.healthStatus}, and i am from 
 ${sickPatient.stateOforigin}, my next doctor appointment is going to be on ${sickPatient.medicalAppointment[1]}.`)