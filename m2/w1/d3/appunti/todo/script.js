// Con create.Element genero un elemento HTML in memoria e lo metto nella variabile assegnata.
// IN NESSUN MODO QUESTO METODO MOSTRA IL TAG NELL'HTML!
let div = document.createElement('div'); // <div></div>
div.innerHTML = 'test'
div.classList.add('classeProva')

let div2 = document.createElement('div');
div2.innerHTML = 'test2'
div2.classList.add('classeProva')

document.querySelector('#html-generato').appendChild(div) // appendChild inserisce l'elemento che abbiamo deciso all'elemento target. Con append inserisco il contenuto in fondo all'elemento target.
document.querySelector('#html-generato').prepend(div2) // con prepend inserisco l'elemento all'inizio del target
// document.querySelector('#html-generato').appendChild(div, div2)

// ---- TODO LIST ----
let bottone = document.querySelector('#inserisci')
let toDoArea = document.querySelector('#to-do')

let x = 1;

bottone.addEventListener('click', function () { //al click succede questa cosa

    // genero l'elemento e gli di una classe
    let todoWrap = document.createElement('div') // creo il div e lo assegno alla var todoWrap
    todoWrap.classList.add('todo') // gli assegno la classe todo

    // prelevo il testo dal campo input e lo inserisco nel div appena generato
    let testo = document.querySelector('#testo')
    todoWrap.innerText = x + '. ' + testo.value
    x++;

    // creo un bottone che mi servirà per eliminare il todo
    let close = document.createElement('button')
    // gli do una classe per lo stile (da fare successivamente)
    close.classList.add('closeButton')
    //inserisco il testo del bottone
    close.innerText = 'elimina'

    close.addEventListener('click', function () {
        todoWrap.remove()
    })
    // inserisco il bottone generato dentro all'elemento creato alla
    todoWrap.append(close)
    // faccio si che l'elemento generato venga mostrato
    toDoArea.append(todoWrap)

    // svuotare il campo
    testo.value = ''
})