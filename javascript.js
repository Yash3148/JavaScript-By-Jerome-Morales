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
  

