let person = {
    name: 'Jane',
    age:  37,
    hobbies: ['Soccer','Photography']
}
console.log('This girl is called '+ person.name)
// That is dot notation
console.log('This girl is '+person['age']+ ' years old')
// this is bracket notation

// ADDING TO OBJECTS
person.height = '5 ft'
person.gender = 'Female'
console.log(person)
// deleting properties 
delete person.age
console.log(person)

// Object mutation
