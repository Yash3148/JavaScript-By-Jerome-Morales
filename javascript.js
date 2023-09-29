------------------------------------------------------------------------------------------------------------------------
                                        <script src="app.js"></script>
// connecting your app.js to index.html file
------------------------------------------------------------------------------------------------------------------------
document.write("Hello Linux!!")
alert("Hello Linux!!");
------------------------------------------------------------------------------------------------------------------------
document.write("Hello Linux!!");
document.write("<br>");
document.write("Yash Singh");
// output
Hello Linux!!
Yash Singh
------------------------------------------------------------------------------------------------------------------------
document.write("<em>Yash</em>");
// for giving text in italic
------------------------------------------------------------------------------------------------------------------------
document.write("<h1>Yash Singh</h2>");
------------------------------------------------------------------------------------------------------------------------
document.write("<h1 style='color:red;'>Yash Singh</h2>");
// here we will give style in single quote whearas in html/css we used to give it in double qoute.
------------------------------------------------------------------------------------------------------------------------
window.alert("Hello Everyone");
------------------------------------------------------------------------------------------------------------------------
// index.html ---> <h1 id="my_title">Welcome to my webpage</h1>
document.getElementById("my_title").innerHTML = "Thank You!!";
// Website will replace Welcome to my webpage to Thank You!! 
------------------------------------------------------------------------------------------------------------------------
// index.html ---> <p id="my_paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro cupiditate</p>
document.getElementById("my_paragraph").innerHTML = "Quick brown"
// Quick brown
------------------------------------------------------------------------------------------------------------------------
// index.html
//     <h2 id="Fruit_title">Fruits</h2>
//     <hr>
//     <h3 class="Fruit">Orange</h3>
//     <h3>Apple</h3>
//     <h3>Cucumber</h3>
//     <h3>Pineapple</h3>
//     <hr> 
document.getElementById("Fruit_title").innerHTML = "List of fruits";
document.querySelector(".Fruit").style.color="orange";
// output
List of fruits
-------------------------------------------------
Orange // ---> orange color will be changed
Apple
Cucumber
Pineapple
-------------------------------------------------
document.querySelector("#Fruit_title").innerHTML = "Hello Fruit";
document.querySelector("#Fruit_title").style.color = "red";
// # ---> It is used to represent the class.
// . ---> It is used to represent the id.
// querySelector ---> It is used for both class and id.
------------------------------------------------------------------------------------------------------------------------
---------------------------------------------- Variable ----------------------------------------------------------------
let x = "Hello Linux!!";
let y = 1
// go to live server ---> F12 ---> console ---> type x ---> it will give output ---> Hello Linux!!
// go to live server ---> F12 ---> console ---> type y ---> it will give output ---> 1
// We Can alos perform arithmetic Equations.
let a = 1;
let b =a+1;
let c =a+b;
// go to live server ---> F12 ---> console ---> type c ---> it will give output ---> 3
------------------------------------------------------------------------------------------------------------------------
---------------------------------------------- Data Type ---------------------------------------------------------------
// String 
let firstName = "Yash";
let lastName = "Singh";
let birth_day = "March 7, 2002";

// Number --> Int, Float
let age = 7;
let grade = 2.1;

// Dynamic Data Type
let x = "Yash"
x = "Yash"
x = 1;

//Boolean
let minor = true;
// when we typeof firstName in console it will give you type of data type.
------------------------------------------------------------------------------------------------------------------------
let title = document.querySelector("#my_title");
title.innerHTML = "This is my form";
title.style.color = "black";
title.style.background = "Grey"
// We can give a variable in which a id or class will be stored later we will perform the task through declared variable.
------------------------------------------------------------------------------------------------------------------------
---------------------------------------------- Add Event Listener ------------------------------------------------------
mybtn.addEventListener('click', function() {
    title.innerHTML = my_textbox.value;
})
// here in Event Listener we can change upper text value by changing the value in the button or box.
// Example ---> index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Add Event Listener</title>
</head>
<body>
    <h2 id="title">Welcome to this page</h2>

    <button id="btn1">Sign-in</button>
    <button id="btn2">Sign-up</button>
    <button id="btn3">Sign-out</button>
    <button id="reset">Reset</button>

    <script src="app.js"></script>
</body>
</html>
// ----> app.js
let title = document.querySelector("#title");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#reset");

btn1.addEventListener('click', function() {
    title.innerHTML = "here we goo!";
})

btn2.addEventListener('click', function() {
    title.innerHTML = "here we goooo!";
})

btn3.addEventListener('click', function() {
    title.innerHTML = "here we gooooooooo!";
})

btn4.addEventListener('click', function(){
    title.innerHTML = "Welcome to this page";
})
// whenever you will click on button Sign-in txt will be changed in title section nut when you will click on reset it will change if value to original.
------------------------------------------------------------------------------------------------------------------------
