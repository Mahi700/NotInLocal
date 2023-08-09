window.onload = function(){
    console.log("Hello !");

    let phoneDisplay = document.getElementById("display");
    
    phoneDisplay.addEventListener('dblclick', function(){

        if(phoneDisplay.style = "-webkit-filter: brightness(45%);"){
            phoneDisplay.style = "-webkit-filter: brightness(75%);";
            console.log("Double Clicked : (White)");
            
        } else{
            phoneDisplay.style = "-webkit-filter: brightness(45%);";
            console.log("Double Clicked : (Black)");
        }

        
        // phoneDisplay.style = "-webkit-filter: brightness(75%);";
        // console.log("Double Clicked");
    });
};