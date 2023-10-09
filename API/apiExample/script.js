let container = document.querySelector("#container");

fetch ('https://swapi.dev/api/people/1/').then((response) => {
    return response.text()
}).then((data) => {
    const myData = JSON.parse(data);
    console.log(myData);

    console.log(myData);

    let p = document.createElement('p');
    p.innerHTML = myData.name;
    container.appendChild(p);

}).catch((error) => {
    console.log('Something went wrong: ', error);
})