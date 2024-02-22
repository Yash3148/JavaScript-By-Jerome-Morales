let btn = document.querySelector("#btn");
let firstname = document.querySelector("#FirstName");
let lastname = document.querySelector("#LastName");
let tbody = document.querySelector("#tbody");

btn.addEventListener('click', function (){
    if(firstname.value.trim() == "" || lastname.value.trim() == ""){
        alert("Please fill out the form completely!");
    } else {
        let new_row = document.createElement("tr");

        let first = document.createElement("td");
        let last = document.createElement("td");

        first.innerHTML = firstname.value;
        last.innerHTML = lastname.value;

        new_row.appendChild(first);
        new_row.appendChild(last);

        tbody.appendChild(new_row);

        firstname.value = "";
        lastname.value = "";

    }
})
