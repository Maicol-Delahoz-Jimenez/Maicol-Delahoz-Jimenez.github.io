//click al boton
const botonConst= document.getElementById("boton")
botonConst.addEventListener("click", PreguntarNombre)

// preguntar nombre

function PreguntarNombre(){
    const nombre = prompt("escribe tu nombre")
    sustituirNombre(nombre)
}

const h1consta = document.getElementById("h1")
const h2consta = document.getElementById("h2")

function sustituirNombre(nombre){
    h1consta.textContent = nombre
    h2consta.textContent = "Bienvenido a nuestra pagina"
}
