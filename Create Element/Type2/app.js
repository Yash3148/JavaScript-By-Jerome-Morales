let mytext = document.querySelector("#mytext");
let btn = document.querySelector("#btn");
let mylist = document.querySelector("#mylist");

btn.addEventListener('click', function(){
    let entered_data = mytext.value;

    if (entered_data.trim() == ""){
        alert("Please enter data.");
    }else{

        let new_elem = document.createElement("li");
        new_elem.innerHTML = mytext.value.toUpperCase();
        // new_elem.innerHTML = mytext.value.toLowerCase();
        mylist.appendChild(new_elem);
    }
})

