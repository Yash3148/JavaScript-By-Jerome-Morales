let numberbox = document.querySelector("#numberbox");
const minus1 = document.querySelector("#minus");
const plus1 = document.querySelector("#plus");
const reset = document.querySelector("#reset");

// In This task we are writting script which help to put input value and then it will increment and decrement from the existing number.

let my_number=0;

plus1.addEventListener('click', function (){
    let existing_number = numberbox.value;
    my_number = existing_number;
    my_number++;
    numberbox.value = my_number;
})
 
minus1.addEventListener('click', () => {
    let existing_number = numberbox.value;
    my_number = existing_number;
    my_number--;
    numberbox.value = my_number;
})

reset.addEventListener('click', function (){
    my_number = 0;
    numberbox.value = my_number;
})