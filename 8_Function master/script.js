                      // Generic Function

function someFunction(a){
    console.log(a);
}

someFunction("Yash");

                     // Anonymous Function

const myVar1 = function(){
    console.log("Hello");

}     
myVar1();  

                     // Arrow Function

const myVar2 = () => {
    console.log("Hello");
}      

myVar2();

function greet(a) {
    return a;
}

const someFunction = () => {
    console.log(greet("Good Morning"));
}
someFunction();

// other way to do above task 

function greet(a) {
    return a;
}

const someFunction = () => console.log(greet("Good Morning"));

someFunction();


function multiply (a,b){
    return a * b;
}

console.log(multiply(2,4));   // output 8

const multiply = (a,b) => a * b;

console.log(multiply(2,3));