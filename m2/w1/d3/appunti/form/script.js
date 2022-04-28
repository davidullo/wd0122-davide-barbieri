let bottone = document.querySelector('#myForm button')

bottone.addEventListener('click', function (event) {
    event.preventDefault(); // blocca il comportamento di default del bottone, cioè l'invio del form
    let nome = document.querySelector('#nome').value
    let password = document.querySelector('#password').value

    if (nome == '' || nome.length < 2) {
        alert('devi inserire il nome')
    }

    if (password == '') {
        alert('devi inserire la password')
    }

})

// il comportamento di default di un form HTML è quello di ricaricare la pagina (è noioso!). Quindi chiediamo a js di bloccare il comportamento di default del form