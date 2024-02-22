let displayArea = document.querySelector("#displayArea");
let inputBox = document.querySelector("#inputBox");
let myBtn = document.querySelector("#myBtn");

let languages = ["Javascript", " PHP", " Python"];

for(let language of languages){
    let li = document.createElement("li");
    li.innerHTML = language;
    displayArea.appendChild(li);
}

myBtn.addEventListener('click', function(){
    let new_item = inputBox.value;
    languages.push(new_item);

    let li = document.createElement("li");
    li.innerHTML = new_item;
    displayArea.appendChild(li);
})

                               // WHILE LOOP

// let x = 0 ;
// while (x < 100){
//     x++;
//     console.log(x);
// }

                               // DO WHILE LOOP
// let x = 0 ;
// do {
//     x++;
//     console.log(x);
// }while(x < 4);

                                // FOR LOOP 

// for (let x = 1; x < 11; x++){
//     console.log(x);
// }