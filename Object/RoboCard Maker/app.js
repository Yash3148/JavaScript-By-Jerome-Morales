const parentele = document.querySelector(".parentElement");
const robotimg = document.querySelector("#robotImage");
const setname = document.querySelector("#setName");
const btmake = document.querySelector("#btnMakeRobot");

class Product {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    introduce() {
        console.log(`Hello my creator, you named me ${this.name}. It looks like I am ${this.age} years old.`);
    }
}


