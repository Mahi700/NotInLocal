// ? This:
// _______


// ? This keyword allows to use currently using Object's Property:
// ___________________________________________________________________ 
let person = {
    firstName : "Mahi",
    lastName : "Mahdi",
    sayHello () {
        console.log("Hello ! i am "+ this.firstName + " and i have a " + car.brand + " car");
    }
};


let car = {
    brand : 'Tata',
    model : 'Safari'
}


person.sayHello();



// !__________________________________________________________________________________________________