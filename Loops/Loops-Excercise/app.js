// Ques.1 Generate numbers from one to ten using console. If the number is even display the text "even" else just console.log the number.
// Ans:
for (let x = 1; x <= 10; x++){
    if(x % 2 == 0){
        console.log("Even");
    }else{
        console.log(x);
    }
}

// Ques.2 Solve question number one but this time generate the data in a browser rather than in cosole.
// Ans:
let my_number = document.querySelector(".my_number")
for (let x = 1; x <= 10; x++){
    if(x % 2 == 0){
        let new_element = document.createElement("li");
        new_element.innerHTML = "Even"
        my_number.appendChild(new_element);

    }else{
        let new_element = document.createElement("li");
        new_element.innerHTML = (x);
        my_number.appendChild(new_element);
    }
}
// output 
// 1
// Even
// 3
// Even
// 5
// Even
// 7
// Even
// 9
// Even

// Ques 3. Generate numbers from one to 20, display the text "JAVASCRIPT" if the number is a multiplication of 3.
// Ans:
for (let x = 1; x <= 20; x++) {
    if (x % 3 === 0) {
      console.log("JAVASCRIPT");
    } else {
      console.log(x);
    }
  }
// output
//  1
//  2
//  JAVASCRIPT
//  4
//  5
//  JAVASCRIPT
//  7
//  8
//  JAVASCRIPT
//  10
//  11
//  JAVASCRIPT
//  13
//  14
//  JAVASCRIPT
//  16
//  17
//  JAVASCRIPT
//  19
//  20
  




