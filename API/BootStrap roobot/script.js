for(let i = 1; i < 10; i++){

    fetch (`https://robohash.org/${i}`)

    .then((response) => {
        let container = document.querySelector("#container");
        
    let img = document.createElement('img');
    img.src = response.url;
    container.appendChild(img);



}).catch((error) => {
    console.log('Something went wrong: ', error);
})
}