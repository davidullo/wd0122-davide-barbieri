let testo = document.querySelector('#testo')
let bottone = document.querySelector('#bottone')
let lista = document.querySelector('#lista')

bottone.addEventListener('click', function () {
    let div = document.createElement('div') // creiamo un <div></div>
    div.classList.add('alert', 'alert-success')
    div.innerHTML = testo.value // scrivi l'elemento nell'html
    testo.value = '' // svuotiamo il campo testo
    lista.append(div); // metti fisicamente il div nell'html
})