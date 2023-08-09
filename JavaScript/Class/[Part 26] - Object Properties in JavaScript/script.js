// ? Objects {} (Properties):
// __________________________


// *Structure of an Object:
// _________________________
// let objectName = {
//     property : value,
//     property : value,
//     property : value,
// };
// !__________________________________________________________________________________________________





// ? Object Example:
// ___________________


// *Declaring a Object:
// _____________________
let person1 = {
    firstName : "Mahi",
    lastName : "Mahdi",
};


// *Declaring a Object [Different Way in Naming]:
// _____________________
// let person2 = {
//     "first Name" : "Mahi",                  // ? [Not Prefered Naming like this, but it will work];
//     "last Name" : "Mahdi",
// }
// !__________________________________________________________________________________________________





// ? Access Objects Property:
// ____________________________



// ? Access all Property's of an Objects:
// _______________________________________
// console.log(person1);  



// *Access an Object [With Dot(.) Notation]:
// console.log(person1.firstName);                                   // ? [Dot Notation];
// console.log(person1.lastName);                                    // ? [Dot Notation];



// ! Calling a Missing Objects Property will return (UNDEFINED) as RESULT:
// ____________________________________________________________________________
// console.log(person1.age);                               // ? Undefined;



// *Access an Object [With Array( [] ) Notation]:
// console.log(person1["firstName"]);                               // ? [Array Notation];
// console.log(person1["lastName"]);                                // ? [Array Notation];
// !__________________________________________________________________________________________________



// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// ? Will not work with Dot(.) Notation:
// _______________________________________

// console.log(person2["first Name"]);
// console.log(person2["last Name"]);
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!





// ? Access and Change Value of Property of an Object:
// ________________________________________________________
// person1.firstName = "MF";
// console.log(person1.firstName);



// ? Add new Property and Value in Object:
// ___________________________________________
person1.age = 25;
// console.log(person1.age);



// ? Delete a Property from an Object:
// ______________________________________
// delete person1.lastName;
// console.log(person1.lastName);



// ? It Checks if there are any property is available  or not with this name:
// ____________________________________________________________________________
// console.log('height' in person1);



// ? Check the Property's of the Object with FOR in Loop:
// __________________________________________________________
for(let key in person1){
    console.log(key);
};



// ___________________________________________________________________________________________________