// MENU
function apriMenu() {
    document.getElementById('pannello').classList.toggle('apri');
}

// PARTE AGGIUNGI TO-DO
let bottone = document.querySelector('#inserisci')
let toDoArea = document.querySelector('#lista-todo')
bottone.addEventListener('click', function () {
    let todoWrap = document.createElement('li')
    let testo = document.querySelector('#testo')
    todoWrap.innerText = testo.value
    toDoArea.append(todoWrap)
    // prova
    // document.getElementById('lista-todo').lastChild
    // fine prova
    testo.value = ''
})

// LISTA IMPEGNI
let lista = document.querySelectorAll('li');
for (var i = 0; i < lista.length; i++) {
    lista[i].addEventListener('mouseover', function () {
        this.classList.add('selezione');
    });
    lista[i].addEventListener('mouseout', function () {
        this.classList.remove('selezione');
    });
    lista[i].addEventListener('click', function () {
        this.classList.toggle('fatto');
    });
}