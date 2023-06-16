function callNeko(){
    var elementExists = document.getElementById("neko");
    if(!elementExists){
        const img = new Image(300);
        img.id = "neko";
        document.body.appendChild(img);
        document.getElementById("mainDiv");
    }

    fetch('https://nekos.best/api/v2/neko')
        .then(response => response.json())
        .then(json => {
        console.log(json.results[0].url)
        img_url = json.results[0].url
        document.getElementById("neko").src = img_url;
    })
}