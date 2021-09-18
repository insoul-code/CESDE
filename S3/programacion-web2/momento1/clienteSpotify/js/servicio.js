let uri ="https://api.spotify.com/v1/artists/7GmXwGXJSsmWTkCyk5Twux/top-tracks?market=ES";

let token="Bearer BQAdWStOv7Pbmdd-RA2e4V5GPEW65-G1cU8w-RpkjTQMSAIs849PJcQJ8Ku0J3tso4v63QdNNXeVZiNc-LB81QQ4guKoAOlsTkBn29OWDXF9VN00e7hRgeS9yCVY11RIIh9ginExcZQsUoj2vr7YYfT9gvufbuMn7yM";

let parametrosPeticion={
    method: "GET",
    headers: {
        Authorization: token
    }
}

fetch(uri,parametrosPeticion)
.then(function(respuesta){
    return(respuesta.json());
})
.then(function(respuesta){
    console.log(respuesta);
    pintarDatos(respuesta.tracks)//Objeto
    //console.log(respuesta.tracks);//Arreglo
    //console.log(respuesta.tracks[0]);//Objeto
    //console.log(respuesta.tracks[0].name);//Propiedad
    //console.log(respuesta.tracks[0].preview_url);//Propiedad
    //console.log(respuesta.tracks[0].album.images[0].url);//Propiedad

})
.catch(function(error){
    console.log(error);
})

function pintarDatos(datos){

    let fila=document.getElementById("fila");

    datos.forEach(function(cancion){
        let columna=document.createElement("div");
        columna.classList.add("col-md-4");

        let card=document.createElement("article");
        card.classList.add("card");
        card.classList.add("my-2");
        
        let contImage=document.createElement("div");
        contImage.classList.add("cont-image");

        let imagen=document.createElement("img");
        imagen.classList.add("img");
        imagen.classList.add("img-fluid");
        imagen.src=cancion.album.images[0].url;

        let nameSong=document.createElement("h6");
        nameSong.textContent=cancion.name;

        let audio=document.createElement("audio");
        audio.src=cancion.preview_url;
        audio.setAttribute('type', 'audio/mpeg');
        audio.setAttribute('controls', 'controls');
        
        contImage.appendChild(imagen);
        card.appendChild(contImage);
        card.appendChild(nameSong);
        card.appendChild(audio);
        columna.appendChild(card);
        fila.appendChild(columna);
    })

    // datos.forEach(cancion => {
    //     console.log(cancion.name);
    // });
}