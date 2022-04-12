function cambiaColore(e) {
    // let blocchi = document.getElementsByClassName('blocco') // array di elementi con la classe blocco
    // blocchi[e].style.backgroundColor = 'red';

    let colore = e.getAttribute('data-colore');
    console.log(colore);
    e.style.backgroundColor = colore;
}
