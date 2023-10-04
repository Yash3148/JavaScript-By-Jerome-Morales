let numberbox = document.querySelector("#numberbox");
const minus1 = document.querySelector("#minus");
const plus1 = document.querySelector("#plus");
const reset = document.querySelector("#reset");

let my_number=0;

plus1.addEventListener('click', function (){
    // my_number = my_number + 1;
    my_number++;
    numberbox.value = my_number;
})

// minus1.addEventListener('click', function (){
//     my_number = my_number - 1;
//     numberbox.value = my_number;
// })

     //This Function is known as Arrow Function.   
minus1.addEventListener('click', () => {
    //my_number = my_number - 1;
    my_number--;
    numberbox.value = my_number;
})

reset.addEventListener('click', function (){
    my_number = 0;
    numberbox.value = my_number;
})