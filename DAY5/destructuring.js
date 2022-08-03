//Object destructuring

const person = {
    name: 'sara',
    age: 25,
    gender: 'female'
}

//destructuring assignment
let { name, age, gender} = person;

console.log(name);
console.log(age);
console.log(gender);

//read as new properties  ":"


const person1 = {
    name: 'sara',
    age: 25,
    gender: 'female'
}


let { name:name1, age:age1, gender:gender1} = person1;
console.log(name1);
console.log(age1);
console.log(gender1);


//ARRAY DESTRUCTURING

const arrValue = ['one', 'two','three']

//destructuring assigment in array

const [x,y,z] = arrValue;

console.log(x)
console.log(y)
console.log(z)

//SKIP specify space to skip items in an array

const arrValue1 = ['one', 'two','three']

const [f, , h] = arrValue;
console.log(f)
console.log(h)

//REST PARAMETERS

const arrValue2 = ['one', 'two','three', 'FOUR']
const [a1, ...a2] = arrValue2;
console.log(a1)
console.log(a2)

//Nested destructuring

const personA = {
name: 'Jack',
age: 26,
hobbies: {
    read: true,
    playGame:true
}
}

const {nameA, hobbies: {read, playGame}} = personA;

console.log(nameA); 
console.log(read); 
console.log(playGame); 

