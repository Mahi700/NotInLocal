/**
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * ?                        Script File                          ;
 * *_______________________________________________
 * ? Author : MF CODE.
 * ? Date : 5 August, 2023;
 * ? Application Name : "RGB Color Generator";
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * 
 * Todo : NONE_____ ;
 */



generateBtn.addEventListener('click', function(){

    // !Declaring variables and Selecting Element:

    let display = document.getElementById("display");
    // let generateBtn = document.getElementById("generateBtn");
    let codeCopyBtn = document.getElementById("codeCopyBtn");
    let colorCode = document.getElementById("colorCode");



    // !Creating variables for making Proper Rgb Color Code:
    // __________________________________________________________
    let red = Math.floor(Math.random() * 255 + 1);
    let green = Math.floor(Math.random() * 255 + 1);
    let blue = Math.floor(Math.random() * 255 + 1);
    
    

    // !Updating Color Code:
    // __________________________________________________________
    let mainRgbColor = `rgb(${red},${green},${blue})`;
    console.log(mainRgbColor);


    // !Changing Background Color by variable:
    // __________________________________________________________
    display.style.backgroundColor = mainRgbColor;


    // !Updating Color Code by variable:
    // __________________________________________________________
    colorCode.textContent = mainRgbColor;



    // !Creating Click to copy the color code function:
    // __________________________________________________________
    codeCopyBtn.addEventListener('click', function(){
        navigator.clipboard.writeText(mainRgbColor);
        console.log("Color Copied");
    });

});



// ? Best COLOR:
// *rgb(161,97,8)
// *rgb(191,110,68)





























// setInterval(GenerateRgbColor, 3000);

// let display = document.getElementById("display");
// let rgbColorCode = document.getElementById("rgbCode");
// let copybtn = document.getElementById("rgbCodeBox");
// let MainRGBColor = GenerateRgbColor();

// function GenerateRgbColor() {
//     let color1 = Math.floor(Math.random() * 255) + 1;
//     let color2 = Math.floor(Math.random() * 255) + 1;
//     let color3 = Math.floor(Math.random() * 255) + 1;

//     let rgbColor = `rgb(${color1},${color2},${color3})`;
//     console.log(rgbColor);

//     rgbColorCode.innerHTML = rgbColor;

//     display.style.backgroundColor = rgbColor;

//     return rgbColor;
// };

// copybtn.addEventListener('click', function(){
//     navigator.clipboard.writeText(MainRGBColor);
// console.log("Text Copied");
// });