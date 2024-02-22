let myData = [

    {
        first_name: "Yash", 
        last_name: "Singh", 
        age: 21,
        fullname: function () {
            return this.first_name + " " + this.last_name;
        }
    },

    {
        first_name: "Leo", 
        last_name: "Messi", 
        age: 36,
        fullname: function () {
            return this.first_name + " " + this.last_name;
        }
    },

    {
        first_name: "Yoshita", 
        last_name: "Yash", 
        age: 21,
        fullname: function () {
            return this.first_name + " " + this.last_name;
        }
    },

    {
        first_name: "Ter", 
        last_name: "Stegen", 
        age: 31,
        fullname: function () {
            return this.first_name + " " + this.last_name;
        }
    },

    {
        first_name: "Rocky", 
        last_name: "Anderson", 
        age: 27,
        fullname: function () {
            return this.first_name + " " + this.last_name;
        }
    }

];

console.log(myData);

// console.log(myData[0].first_name);
// console.log(myData[0].last_name);
// console.log(myData[0].age);
// console.log(myData[0].fullname());



// console.log(myObject.first_name);
// console.log(myObject.last_name);
// console.log(myObject.age);


// function () {
//     console.log("Good morning!");
// }


// myData.forEach((item, idx) => {
//     console.log(idx + ": " + item.fullname());
// });

// for (var i = 0; i <= myData.length - 1; i++) {
//     console.log(myData[i].first_name);
// }

let listHolder = document.querySelector("#listHolder");
let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let age = document.querySelector("#age");
let btnSubmit = document.querySelector("#btnSubmit");


btnSubmit.addEventListener("click", function () {
    if (firstName.value.trim() == "" || lastName.value.trim() == "" || age.value.trim() == "") {
        alert("Fill out the form completely");
    } else {
        let copyData = [...myData];
        let newEntry = {
            first_name: firstName.value.trim(),
            last_name: lastName.value.trim(),
            age: age.value.trim(),
            fullname: function () {
                return this.first_name + " " + this.last_name;
            }
        }

        copyData.push(newEntry);
        myData.splice(0, myData.length, ...copyData);
        console.log(myData);
        listHolder.innerHTML = "";


        renderRecord();
        firstName.value = "";
        lastName.value = "";
        age.value = "";


        
    }
})








function renderRecord() {
    myData.forEach((item, index) => {
        let tr = document.createElement("tr");
        tr.innerHTML = `
                <td>${index + 1}</td>
                <td>${item.fullname()}</td>
                <td>${item.age}</td>
              
                `;
        listHolder.appendChild(tr);
    });
}

renderRecord();






//Calling or executing a normal function
goNorth();


//Calling a method or a function residing inside of an object
myObject.goNorth();