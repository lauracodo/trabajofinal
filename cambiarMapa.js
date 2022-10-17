function cambiarMapa(e) {
    let id = e.target.attributes.id.value
    id = id[id.length - 1]
    if (id === "1"){
        const mapa = document.getElementById("mapa1")
        const mapa_otro = document.getElementById("mapa2")
        mapa.className = "mapa visible"
        mapa_otro.className = "mapa invisible"
    }
    else {
        const mapa = document.getElementById("mapa2")
        const mapa_otro = document.getElementById("mapa1")
        mapa.className = "mapa visible"
        mapa_otro.className = "mapa invisible"
    }
}
const botones = document.getElementsByClassName("lugar")
for (let boton of botones) {
    boton.addEventListener("click", cambiarMapa)
}
botones[0].click()