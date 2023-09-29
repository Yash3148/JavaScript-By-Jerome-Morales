let mytext = document.querySelector("#mytext");
let btn = document.querySelector("#btn");
let mylist = document.querySelector("#mylist");

btn.addEventListener('click', function(){
    let new_elem = document.createElement("li");
    new_elem.innerHTML = mytext.value;
    mylist.appendChild(new_elem);
});
