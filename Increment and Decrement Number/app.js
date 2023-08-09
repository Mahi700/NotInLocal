window.onload = main();

function main(){
    let decrementBtn = document.getElementById("DecrementBtn");
    let incrementBtn = document.getElementById("IncrementBtn");
    let display = document.getElementById("display");

    let counter = 1;
    console.log(`counter: ${counter}`);


    decrementBtn.addEventListener('click', function(){
        counter = counter - 1;
        display.textContent = counter;
        console.log(`counter: ${counter} (Decrement)`);
    });

    incrementBtn.addEventListener('click', function(){
        counter = counter + 1;
        display.textContent = counter;
        console.log(`counter: ${counter} (Increment)`);
    });
};