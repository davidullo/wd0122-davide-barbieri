// ******* ESERCIZIO 1
fetch("json/articoli.json")
    .then(res => {
        console.log(res);
        return res.json()
    })

let campo = document.querySelector('#scrivi')
let bottone1 = document.querySelector('#salva')
let bottone2 = document.querySelector('#cancella')
let titolo = document.querySelector('#titolo')

bottone1.addEventListener('click', function (e) {
    e.preventDefault();
    sessionStorage.setItem("nome", campo.value)
    titolo.innerHTML = "Ciao sono " + sessionStorage.getItem("nome") + "! 👋"
})

bottone2.addEventListener('click', function (e) {
    e.preventDefault();
    sessionStorage.clear();
    titolo.innerHTML = "Nessun dato."
    campo.value = ""
})

// ******* ESERCIZIO 2

// var i = 0;
// function timer() {
//     i++
// } setInterval, 1000

// let timer = document.querySelector('#secondi')
// timer.innerHTML = i

var timer = document.querySelector('#secondi')
let secondi = 0
setInterval(function () {
    timer.innerHTML = secondi++;
}, 1000)