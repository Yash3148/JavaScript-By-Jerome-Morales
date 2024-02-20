function addTwoNumbers(num1, num2){
    let sum = num1 + num2;
    console.log(sum);
}

function greet(typeofGreeting){
    alert(typeofGreeting);
}

let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#good");

btn1.addEventListener('click', function(){
    addTwoNumbers(5,10);
})

btn2.addEventListener('click', function(){
    greet("Good Evening");
})