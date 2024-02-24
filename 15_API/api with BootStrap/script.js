let char = document.querySelector("#char");

for(let i = 1; i < 10; i++){
    fetch (`https://swapi.dev/api/people/${i}/`).then((response) => {
    return response.text()
}).then((data) => {
    const myData = JSON.parse(data);

    let tr = document.createElement('tr');
    tr.innerHTML = 
    `<th scope="row">1</th>
                <td>${myData.name}</td>
                <td>${myData.height}</td>
                <td>@${myData.hair_color}</td>`;
    char.appendChild(tr);

}).catch((error) => {
    console.log('Something went wrong: ', error);
})
}
