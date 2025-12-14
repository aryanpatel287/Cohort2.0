// Day 39 - Level 2 tasks


// 1. Write a higher-order function `runTwice(fn)` that
// takes another function and executes it two times.
function runTwice(func){
    func()
    func()
}
runTwice(function print(){
    console.log("ran")
})


// 2. Create one pure function that always returns the
// same output for a given input, and one impure
// function using a global variable

function prfn(a=0,b=0){
    return a+b
}
console.log(`Pure Function,  ${prfn()}`)

let a = 0
console.log(`Before impure function a = ${a}`)

function imprfn(){
    a++;
    return a;
}
imprfn()
console.log(`After impure function a = ${a}`)


// Write a function that uses object destructuring
// inside parameters to extract and print `name` and
// `age`

function objprint({name,age}){
    console.log(name,age)
}
objprint({name:"Aryan",age:21})


//  Given an array of numbers, use `map()` to create a
// new array where each number is squared.

let arr = [1,2,3,4,5,6]
console.log(`Array considered , arr = ${arr}`)
let sqrarr=arr.map(function(value){
    return value**2;
})

console.log(`After map() function sqrarr = ${sqrarr}`)


//  Use `filter()` to get only even numbers from an
// array.

let filteredarr= arr.filter(function(value){
    if(value%2==0) return value;
})

console.log(`After filter() function filteredarr = ${filteredarr}`)



// Use `reduce()` to find the total salary from an array
// of numbers `[1000, 2000, 3000]`

let salary = [1000, 2000, 3000];
console.log(`Salary array , salary = ${salary}`)
let totalSalary= salary.reduce(function(accumulator, value){
    return (accumulator+value)
},0)
console.log(`totalSalary array , totalsalary = ${totalSalary}`)


// Create a nested object (`user → address → city`) and
// access the city name inside it.

let obj1={
    user:"Ayan",
    address:{
        city:"ahmd"
    }
}
let {city}= obj1.address
console.log(city)