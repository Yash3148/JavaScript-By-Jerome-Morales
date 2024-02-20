// It will provide output directly to console output but we will go through args method.
// function numbers(a, b, c ,d){
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(d);
// }

// function numbers(...args){
//     console.log(args);
// }

// numbers(1,2,3,4,5,6,7,8,9, "Yoshita");

// In this we can multiply arguments which are given here 2,3,4 is given through which we will get console output of 24.

function multiplyNumbers(...args){
    let multiplier = 1;
    for(let num of args){
        multiplier = multiplier * num;

    }
    return multiplier;
}
console.log(multiplyNumbers(2,3,4));

