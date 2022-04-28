let richiesta = new XMLHttpRequest() // inizializzo l'oggetto

// GET è per la lettura
// POST è per la creazione
// PUT / PATCH è per l'aggiornamento
// DELETE è per l'eliminazione

richiesta.open('GET', 'https://sofin.wp-admin.it/public/api/v1/user');

richiesta.onload = function (res) {
    // console.log(richiesta.response);
}

richiesta.send() // avvio la richiesta

// La modalità sopra è un po' antiquata ed oggi si utilizzano le fetch

fetch('https://jsonplaceholder.typicode.com/users')
    .then(data => data.json())
    .then(utenti => {

        console.log(utenti);
        for (let user of utenti) {

            let div = document.createElement('div');
            div.innerHTML = user.name

            document.querySelector('#target').append(div)
        }
    })

// JSON

let j = '{"name":"mario","eta":30}'

console.log(JSON.parse(j).name)

// per convertire un oggetto in stringa dovrei usare JSON.stringify(oggetto)