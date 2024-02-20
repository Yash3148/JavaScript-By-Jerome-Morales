function addTwoNumbers(){
    let a = 2;
    let b = 5;
    let sum = a + b;
    console.log(sum);
}

function greet(typeofGreeting){
    alert(typeofGreeting);
}

let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#good");

btn1.addEventListener('click', function(){
    addTwoNumbers();
})

btn2.addEventListener('click', function(){
    greet("Good Evening");
})