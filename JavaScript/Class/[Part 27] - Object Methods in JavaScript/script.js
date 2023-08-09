// ? Objects {} (Methods):
// ________________________


// ? Method:
// __________
// ? Any Function which is releted to Object is called Method;


// *Declaring an Object:
// ______________________
let person = {
    firstName : "Mahi",
    lastName : "Mahdi"
};

person.age = 25;



// ? To create a Method [1st Technic]:
// _______________________
// person.sayHello = function (){
//     console.log("Hello !");
// };

// person.sayHello();
// !__________________________________________________________________________________________________





// ? To add a Method to an Object (by using a predefined Function) [2nd Technic]:
// _____________________________________________________________________________________
// function greet(){
//     console.log("Hello !");
// };

// person.sayHello = greet;

// person.sayHello();
// !__________________________________________________________________________________________________





// ? Add a Method directly to an Object when declaring it [3rd Technic]:
// __________________________________________________________________________
// let person = {
//     firstName : "Mahi",
//     lastName : "Mahdi",
//     sayHello : function (){
//         console.log("Hello !");
//     }
// };

// console.log(person.sayHello);
// !__________________________________________________________________________________________________





// ? Add Method directly to an Object when declaring it (Without ': function')  [4th Technic]:
// _________________________________________________________________________________________
// let person = {
//     firstName : "Mahi",
//     lastName : "Mahdi",
//     sayHello () {
//         console.log("Hello !");
//     }
// };

// console.log(person.sayHello);



// !__________________________________________________________________________________________________