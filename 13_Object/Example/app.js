let myObject = [

    {
        first_name: "Yoshita",
        last_name: "Yash",
        age: 21,
        fullname: function(){
            return this.first_name + " " + this.last_name;
        }
    },

    {
        first_name: "Leo",
        last_name: "Messi",
        age: 36,
        fullname: function(){
            return this.first_name + " " + this.last_name;
        }
    },

    {
        first_name: "FC",
        last_name: "Barcelona",
        age: 128,
        fullname: function(){
            return this.first_name + " " + this.last_name;
        }
    }
];

// console.log(myObject[0]);

console.log(myObject[0].first_name);
console.log(myObject[0].last_name);
console.log(myObject[0].age);
console.log(myObject[0].fullname());


// console.log(myObject.first_name);
// console.log(myObject.last_name);
// console.log(myObject.age);