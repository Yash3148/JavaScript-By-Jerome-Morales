let title = document.querySelector("#title");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");
let reset = document.querySelector("#reset");
let body = document.querySelector("body");

btn1.addEventListener('click', function() {
    body.style.background = "#e94560";
})

btn2.addEventListener('click', function() {
    body.style.background = "#ffd66b";
})

btn3.addEventListener('click', function() {
    body.style.background = "#0278ae";
})

btn4.addEventListener('click', function(){
    body.style.background = "#61b15a";
})

reset.addEventListener('click', function(){
    body.style.background = "#fff";
})
