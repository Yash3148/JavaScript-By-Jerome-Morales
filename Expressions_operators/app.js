let displayArea = document.querySelector("#displayArea");
// let inputBox = document.querySelector("inputBox");
let myBtn = document.querySelector("#myBtn");

myBtn.addEventListener("click", function () {
    let a = 3;
    let b = 3;
    let x = 2;


// Arithmetic Operators

    // let c = a + b;            // Addition Operator
    // let c = a - b;           // Subtraction Operator
    // let c = a * b;          // Multiplication Operator
    // let c = a / b;         // Division Operator
    // let c = a % b;        // Remainder Operator
    // let c = a ** b;      // Exponential Operator

    // displayArea.innerHTML = c;

// Relational Operators

    // if (a < b){
    //     displayArea.innerHTML = "B is greator than A";
    // }else {
    //     displayArea.innerHTML = "B is less than A";
    // }

    // if (a <= b){
    //     displayArea.innerHTML = true;
    // }else {
    //     displayArea.innerHTML = false;
    // }

// Equality Operators
    // if (a == b){                   // Eqaulity Operator
    //     displayArea.innerHTML = "Pass";
    // }else {
    //     displayArea.innerHTML = "Failed";
    // }

    // if (a === b){                     // Identity Operator  ---> It is somehow equal to equality operator but it need proper data-type. For example a = interger--> 2 and b = string --> "2" it will give result as failed. Whereas in similar condition like tihs with equality operator it will pass data.  
    //     displayArea.innerHTML = "Pass";
    // }else {
    //     displayArea.innerHTML = "Failed";
    //}

// Assignment Operators
    // x += a;    // explanation --> x = x + a;  Addition Assignment
    // displayArea.innerHTML = x;

    // x -= a;     // explanation --> x = x - a;    Substraction Assignment
    // displayArea.innerHTML = x;

    x *= a;        // explanation --> x = x * a;  Multiplication Assignment
    displayArea.innerHTML = x;
   
}) 