// Ques: FizzBuzz is a task where the programmer is asked to print numbers from 1 to 100, but here’s the catch, multiple of three should print “Fizz” and similarly print “Buzz” for multiples of 5 and lastly print “FizzBuzz” for multiples of three and five?
// Ans:

for(let x = 1; x <= 100; x++){
    if (x % 3 == 0 && x % 5 == 0){
        console.log("FizzBuzz");
    } else if (x % 3 == 0){
        console.log("Fizz");
    }else if (x % 5 == 0){
        console.log("Buzz")
    }else{
        console.log(x);
    }
}