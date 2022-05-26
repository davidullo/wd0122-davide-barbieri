let bottone: Element | null = document.querySelector('#myform button')
bottone?.addEventListener('click', function (e) { // se l'elemento potrebbe essere null, si mette il "?"
    e.preventDefault(); //blocco l'esecuzione di default del form (perchè button si trova dentro il form)
    let fields = document.querySelectorAll<HTMLInputElement>('#myform input') // con il generic gli diciamo che deve restituirci un HTMLInputElement
    let values = Array.from(fields).map((f: HTMLInputElement) => f.value) // fields non è proprio un'array (ma una nodelist), quindi aggiungiamo "Array.from(fields)" per trasformarlo in array. Array è una classe predefinita, e from è un metodo predefinito di Array.

    let [name, lastname, password] = values; // il queryselector prende i dati in ordine dall'altro verso il basso, e non perché i nomi sono uguali all' id dell' input.

    let valid: boolean = true; //facciamo una variabile di controllo booleana impostata su true

    if (password.length < 8) { // il ? si mette perché fields (quindi anche password) è HTMLInputElement che potrebbe essere null se la lunghezza del value di password è minore di 8...
        valid = false;
    }

    for (let field of fields) { // ciclo tutti i campi e dico se anche uno solo dei campi è vuoto, valid sarà false
        if (!field.value) {
            valid = false;
        }
    }

    if (valid) {
        console.log('valido');

    }


})