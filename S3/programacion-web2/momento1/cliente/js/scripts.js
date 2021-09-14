let etiqueta=document.getElementById("otherSong");
let oldsong=document.getElementById("oldSong");
let imagen1=document.getElementById("image1");
let nombreCancion1=document.getElementById("nameSong1");
let cancion1=document.getElementById("song1");
let imagen2=document.getElementById("image2");
let nombreCancion2=document.getElementById("nameSong2");
let cancion2=document.getElementById("song2");
let imagen3=document.getElementById("image3");
let nombreCancion3=document.getElementById("nameSong3");
let cancion3=document.getElementById("song3");

etiqueta.addEventListener("click", cambiarCancion);
oldSong.addEventListener("click", returnCancion);

function cambiarCancion(){
    imagen1.src = "img/kaseo3.jpg";
    nombreCancion1.innerHTML = "Guapo tarde";
    cancion1.src = "audio/GuapoTarde.mp3";

    imagen2.src = "img/foo2.jpg";
    nombreCancion2.innerHTML = "Wheels";
    cancion2.src = "audio/Wheels.mp3";

    imagen3.src = "img/kaseo2.jpg";
    nombreCancion3.innerHTML = "Basureta";
    cancion3.src = "audio/basureta.mp3";

    etiqueta.classList.add("d-none");
    oldsong.classList.remove("d-none");
}

function returnCancion(){
    imagen1.src = "img/image_content_28810652_20170607174733.jpg";
    nombreCancion1.innerHTML = "Repartiendo Arte";
    cancion1.src = "audio/repartiendoarte.mp3";

    imagen2.src = "img/foo-fighters-1581339172.4464262.jpg";
    nombreCancion2.innerHTML = "The pretender";
    cancion2.src = "audio/ThePretender.mp3";

    imagen3.src = "img/mitadymitad.jpg";
    nombreCancion3.innerHTML = "Mitad y Mitad";
    cancion3.src = "audio/mitadymitad.mp3";

    etiqueta.classList.remove("d-none");
    oldsong.classList.add("d-none");
}

