let timerDisplay = document.querySelector("#timerDisplay");
let start = document.querySelector("#start");
let stop = document.querySelector("#stop");

let theTimer = 0;
let myTimer;

start.addEventListener("click", function(){

    myTimer = setInterval(function(){

        // theTimer++;
    
        theTimer = theTimer + 1;
        timerDisplay.innerHTML = theTimer;
    
    }, 1000);

})

stop.addEventListener("click", function(){
    clearInterval(myTimer);

})
