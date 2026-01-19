// Day 58 Question Sheet 1

// SECTION 1: Objects and OOPS Thinking (Foundation)
// 	1.	Create a user object that stores name and email and has a login method which prints “User logged in”.

// let user = {
//   userName: 'Aryan',
//   userEmail: 'ara@as.com',
//   userLogin: function () {
//     console.log('User logged in')
//   },
// }


// 	2.	Imagine you now have 5 users.
// First, think how you would manage them without using a class.
// Then convert the same logic using a class and observe how the code becomes cleaner. Write code for both approaches.

// class User {
//   constructor(userName, userEmail) {
//     this.userName = userName
//     this.userEmail = userEmail
//   }

//   userLogin() {
//     console.log('User logged in')
//   }
// }

// let user1 = new User('Aryan', 'a@asd.co')
// let user2 = new User('Aryaa', 'a@d.co')
// let user3 = new User('Aman', 'a@ad.co')
// let user4 = new User('Yash', 'a@y.co')
// let user5 = new User('Khilan', 'a@k.co')


// 	3.	Create a product object that stores name and price and has a method which returns the final price after discount.
// The goal of this section is to understand why keeping data and behavior together makes code easier to manage.

// class Product {
//     constructor(ProductName, ProductPrice) {
//         this.ProductName = ProductName
//         this.ProductPrice = ProductPrice
//     }

//     ProductDiscount(discount) {
//         return this.ProductPrice - ((this.ProductPrice / 100) * discount)
//     }
// }
// let P1 = new Product('Biscuit', 100)
// console.log(`Discounted Price is ${P1.ProductDiscount(6)}`)


// --------------------------------------------------------------------------------------------------------------------------------


// SECTION 2: Classes and Objects
// 	4.	Create a Car class with the following:
// brand
// speed
// a drive method that prints the car brand and speed

// class Car {
//     constructor(brandName, carSpeed) {
//         this.brandName = brandName
//         this.carSpeed = carSpeed
//     }

//     drive() {
//         console.log(`Car Brand name is ${this.brandName}`)
//         console.log(`${this.brandName}'s Car Speed is ${this.carSpeed}km/h`)
//     }
// }



// 	5.	Create two different car objects from the same class and verify that their data is different.

// let car1 = new Car('BMW', 1000)
// car1.drive()
// let car2 = new Car('Maruti', 1)
// car2.drive()



// 	6.	Answer this in your own words:
// If classes did not exist, how would you write this logic and what problems might occur when the project becomes large?

// there will lots of variables and having same lines of codes ,after some time even the variable name will not be available


// --------------------------------------------------------------------------------------------------------------------------------


// SECTION 3: Constructor and this keyword
// 	7.	Create a Student class whose constructor accepts name and roll number.
// Add a method introduce that prints both values.

// class Student {
//     constructor(StudentName, StudnetRollNo) {
//         this.StudentName = StudentName
//         this.StudnetRollNo = StudnetRollNo
//     }

//     introduceStudent() {
//         console.log(`Student Name is ${this.StudentName} with Roll number ${this.StudnetRollNo}.`)
//     }
// }
// let s1 = new Student('Aryan', 32)
// s1.introduceStudent()


// 	8.	Inside the constructor, set values using this.
// Then try removing this and notice what error occurs and why.

// ans : variables will be treated as undefined


// 	9.	Create an object with two methods:
// One method using a normal function
// One method using an arrow function

// Inside both, print this and observe the difference.

// The goal is to clearly understand how this works and when it changes.

// let obj1 = {
//     normalFunc: function () {
//         console.log(this)
//     },
//     arrowFunc: () => {
//         console.log(this)
//     }
// }
// obj1.arrowFunc()//its parent is obj and parent is defined in the window or global , so this will give the window
// obj1.normalFunc()//this will refer to the obj here


// --------------------------------------------------------------------------------------------------------------------------------


// SECTION 4: Constructor Functions and Prototypes
// 	10.	Create a User constructor function (do not use class syntax).
//Before classes were introduced in the ES6 version of js , this is how the constructors were created

// 	11.	Add a login method in two ways:
// First, inside the constructor
// Then, move the method to the prototype

// 	12.	Create two User objects and compare their login methods using equality.
// Explain why the result is true or false.
// The purpose here is to understand how prototypes help share behavior efficiently.

// function User() {
//     this.name = 'Aryan'
//     this.constLogin = function () {
//         console.log('Contructor login')
//     }
// }

// User.prototype.loggedin = function () {
//     console.log('prototype login')
// }

// let u1 = new User()
// console.log(u1.name)
// let u2 = new User()
// console.log(u2.loggedin === u1.loggedin)//This is will return true. Cuz prototype have shared memory so function will be same for both user.
// console.log(u1.constLogin === u2.constLogin)//But if it had been in the constructor both user will have different functions defined specifically for them.


// --------------------------------------------------------------------------------------------------------------------------------


// SECTION 5: call, apply, bind
// 13.	Create a function that prints this.name.

// function abcd(name, email) {
//     this.name = name
//     this.email = email
//     console.log(this.name)
//     console.log(this.email)
// }

// // 14.	Create an object that contains a name property.

// let obj = {
//     name: 'aran'
// }


// // Use call to run the function using the object
// abcd.call(obj, obj.name, 'as@as')

// // Use apply to run the function using the object
// abcd.apply(obj, ['aruan', 'as@cs.com']) //Same as `call()`, but arguments are passed as an array.

// Use bind to create a new function and then call it

// function fn(){
//     console.log(this.name)
// }
// let newFn = fn.bind(obj)
// newFn()

// 15.	Borrow a method from one object and run it for another object using call.

// let obj2 = {
//     name: 'ajun',
//     greet: function (greeting) {
//         console.log(`${greeting} ${this.name}`)
//     }
// }

// let obj3 = {
//     name: 'yuki'
// }

// obj2.greet.call(obj3, 'Hello')

// The goal is to understand how this can be manually controlled.
