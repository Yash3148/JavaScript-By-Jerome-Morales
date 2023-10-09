fetch ('data.txt').then((response) => {
    return response.text()
}).then((data) => {
    const myData = JSON.parse(data);
    console.log(myData);

    console.log(myData[1].name);
    console.log(myData[1].age);
    console.log(myData[1].city);


}).catch((error) => {
    console.log('Something went wrong: ', error);
})