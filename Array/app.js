let displayArea = document.querySelector("#displayArea");
let inputBox = document.querySelector("#inputBox");
let myBtn = document.querySelector("#myBtn");

let fruits = ["Apple", "Banana", "Mango", "Orange", "Red"];
 displayArea.innerHTML = fruits;

    fruits.push("Orange");
    console.log(fruits);
    // displayArea.innerHTML = fruits[3];

    // fruits.pop();   // Pop is used to remove last string in the list. 
    // fruits.shift();  // Whearas shift is used to remove First string in the list.
    // fruits.unshift("Corn"); // Unshift is used to add an item to the beginning of an array.
    // fruits.push("Mango"); // Push is used to add an item to the ending of an array.

 myBtn.addEventListener("click", function () {
     let new_fruit = inputBox.value;
     fruits.push(new_fruit);
     displayArea.innerHTML = fruits;
 })