const rel = document.querySelector('#rel')

function relogio(){
    let date = new Date()

    let horas = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()

    rel.innerHTML = horas + ':' + min + ':' + sec
}

