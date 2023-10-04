function addTwoNumbers(){
    let a = 2;
    let b = 5;
    let sum = a + b;
    console.log(sum);
}

let btn1 = document.querySelector("#btn1");

btn1.addEventListener('click', function(){
    addTwoNumbers();
})
