let uri = "https://accounts.spotify.com/api/token";

let dato1="grant_type=client_credentials";
let dato2="client_id=21f09742882040519ae101b2c779057e";
let dato3="client_secret=a8a9f39aa11645948a4bf4bec7936807";

let parametrosPeticion={
    method: "POST",
    headers: {
            "Content-Type" : "application/x-www-form-urlencoded" 
    },
    body:dato1+"&"+dato2+"&"+dato3
}

fetch(uri,parametrosPeticion)
.then(function(respuesta){
    return(respuesta.json());
})
.then(function(respuesta){
    console.log(respuesta);
    obtenerToken(respuesta);

})
.catch(function(error){
    console.log(error);
})

function obtenerToken(datos){
    let token=datos.token_type+" "+datos.access_token;
    console.log(token);
    perdirCanciones(token);
}

function perdirCanciones(token){
    let uri ="https://api.spotify.com/v1/artists/7GmXwGXJSsmWTkCyk5Twux/top-tracks?market=ES";
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
        pintarDatos(respuesta.tracks);
    })
    .catch(function(error){
        console.log(error);
    })
}

function pintarDatos(datos){
    
    let fila=document.getElementById("fila");
    

    datos.forEach(function(cancion){
        let columna=document.createElement("div");
        columna.classList.add("item");

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

        let popularity=cancion.popularity;
        let rate=document.createElement("input");
        rate.setAttribute('value', popularity);
        rate.setAttribute('data-show-caption', 'false')
        rate.setAttribute('data-min','0');
        rate.setAttribute('data-max', '100');
        rate.classList.add("input-rate");
        rate.classList.add("rating-input");
        
        contImage.appendChild(imagen);
        card.appendChild(contImage);
        card.appendChild(nameSong);
        card.appendChild(rate);
        card.appendChild(audio);
        columna.appendChild(card);
        fila.appendChild(columna);

        $('.input-rate').rating({displayOnly: true, step: 0.5});
        $('.input-rate').rating({clearCaption: 'de popularidad'});
    })
}

const gap = 16;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("fila"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", e => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
    prev.style.opacity = "1";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.opacity = "0.8";
  }
});
prev.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.opacity = "0.8";
    prev.style.display = "flex"
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
    next.style.opacity = "1";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));