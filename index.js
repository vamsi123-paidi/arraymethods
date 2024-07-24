//using foreach
//creation of an array of numbers
let numbers = [1,2,3,4,5]
//A function that uses the forEach method to print each in the array to the console
function printNumbers(arr) {
    arr.forEach(function(number){
        console.log(number);
    });
}
printNumbers(numbers);

//using maps
//creation of array of numbers
let numbersForMap = [1,2,3,4,5,6,7,8,9]
// Function to create a new array with each number doubled using map
function doubleNumbers(arr) {
    let doubled = arr.map(function(number) {
        return number * 2;
    });
    return doubled;
}
// Call the function and print the new array to the console
let doubledNumbers = doubleNumbers(numbersForMap);
console.log(doubledNumbers);

//using filter
let numbersForFilter = [1,2,3,4,5,6,7,8,9]
// Function to create a new array with only the even numbers using filter
function filterEvenNumbers(arr) {
    let evenNumbers = arr.filter(function(number) {
        return number % 2 === 0;
    });
    return evenNumbers;
}
// Call the function and print the new array to the console
let evenNumbers = filterEvenNumbers(numbersForFilter);
console.log(evenNumbers);

//using reduce
let numbersForReduce=[1,2,3,4,5,6,7,8,9]
function sumNumbers(arr) {
    let sum = arr.reduce(function(acc, curr) {
        return acc + curr;
    }, 0);
    return sum;
}
// Call the function and print the sum to the console
let sum = sumNumbers(numbersForReduce);
console.log(sum);

//using find
// Create an array of objects representing people
let people = [
    { 
        name: 'vamsi',
        age: 24
     },
    { 
        name: 'vinay',
        age: 27
    },
    { 
        name: 'revanth',
        age: 22 
    },
    {
        name: 'yagnesh', 
        age: 30 
    }
];
// Function to find the first person older than 25 using find
function findPerson(arr) {
    let person = arr.find(function(person) {
        return person.age > 25;
    });
    return person;
}
// Call the function and print the person's name to the console
let person = findPerson(people);
if (person) {
    console.log(person.name);
} else {
    console.log('No person older than 25 found.');
}

//using findIndex
// Create an array of objects representing people
let peopleForIndex = [
    { 
        name: 'vamsi',
        age: 22
    },
    { 
        name: 'yagnesh', 
        age: 17 
    },
    { 
        name: 'abhi', 
        age: 22 
    },
    { 
        name: 'chandu', 
        age: 23
    }
];
// Function to find the index of the first person younger than 18 using findIndex
function findPersonIndex(arr) {
    let index = arr.findIndex(function(person) {
        return person.age < 18;
    });
    return index;
}
// Call the function and print the index to the console
let index = findPersonIndex(peopleForIndex);
console.log(index);



