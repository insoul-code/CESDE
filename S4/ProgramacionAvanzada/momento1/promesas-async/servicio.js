let url ="https://api.spotify.com/v1/artists/7GmXwGXJSsmWTkCyk5Twux/top-tracks?market=US"
let token = "Bearer BQA6fG1x4HJLR3-wTSinV3RqtjgBiR2UUs73tOgWqRJvTD2fjAlWywqxaRsbnK7Ox9hmjYTDjnDdZVfLIG2BKuxRoWA8f7XUHpEA0ZyTL0l37wRAM46hf8A9PayWLgIgVg1aMum1MkDF72eUjeNLtYo8UG1i2Z0"
let parametros={
    method:"GET",
    headers:{
        Authorization:token
    }
}

fetch(url,parametros)
.then(function(respuesta){
    return(respuesta.json())
})
.then(function(respuesta){
    console.log(respuesta)
})
.catch(function(respuesta){
    console.log(respuesta)
})