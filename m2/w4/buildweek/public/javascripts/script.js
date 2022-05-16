/*
// ********************** PARTE DI FLAVIO
//indicare id utente da eliminare alla fine
fetch("http://jsonplaceholder.typicode.com/users/13", {
    method: 'DELETE'
})

//Aggiunta
let data = {
    name: "Flavio",
    username: "Flavio213",
    email: "mail@maiul.com",
}
fetch("http://jsonplaceholder.typicode.com/users/", {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-type': 'Application/json'}
})

//Edit
fetch("http://jsonplaceholder.typicode.com/users/13", {
    method: 'PATCH',
    body: JSON.stringify(data),
    headers: { 'Content-type': 'Application/json'}
}).then(function(response){
    console.log(response);
})


fetch("http://jsonplaceholder.typicode.com/users/13").then(res=>res.json()).then(res=>{})
*/

const APPURL = 'https://jsonplaceholder.typicode.com/users'
let tabella = document.querySelector('#tbody')
fetch(APPURL)
    .then(res => res.json())
    .then(res => {
        console.log(res);
        for (let utente of res) {
            let table = document.getElementById('utenti')
            table.classList.add('table')
            table.classList.add('table-bordered')
            table.classList.add('table-striped')
            let tr = document.createElement('tr')
            let tdID = document.createElement('td')
            tdID.innerHTML = utente.id
            let tdName = document.createElement('td')
            tdName.innerHTML = utente.name
            let tdUser = document.createElement('td')
            tdUser.innerHTML = utente.username
            let tdEmail = document.createElement('td')
            tdEmail.innerHTML = utente.email
            let tdPhone = document.createElement('td')
            tdPhone.innerHTML = utente.phone
            let tdWebsite = document.createElement('td')
            tdWebsite.innerHTML = utente.website
            tr.append(tdID, tdName, tdUser, tdEmail, tdPhone, tdWebsite)

            // ****** BOTTONE VEDI
            // let viewModal = document.getElementById('viewModalContent')
            let tdVedi = document.createElement('td')
            let btnVedi = document.createElement('button')
            btnVedi.innerHTML = '<i class="bi bi-eye"></i>'
            btnVedi.setAttribute("data-bs-toggle", "modal");
            btnVedi.setAttribute("data-bs-target", "#viewModal");
            btnVedi.classList.add('btn', 'btn-primary', 'viewButton')
            btnVedi.addEventListener('click', function () {
                fetch(APPURL + '/' + utente.id, {
                    method: 'GET'
                }).then(function (res) {
                    console.log(res);
                })
            })
            tdVedi.append(btnVedi)
            tr.append(tdVedi)

            // ****** FINE BOTTONE VEDI

            // ****** BOTTONE MODIFICA
            let tdModifica = document.createElement('td')
            let btnModifica = document.createElement('button')
            btnModifica.innerHTML = '<i class="bi bi-pencil-square"></i>'
            btnModifica.setAttribute("data-bs-toggle", "modal");
            btnModifica.setAttribute("data-bs-target", "#editModal");
            btnModifica.classList.add('btn', 'btn-warning', 'editButton')
            // btnModifica.addEventListener('click', function () {
            //     fetch(APPURL + '/' + utente.id, {
            //         method: 'PUT'
            //     }).then(function (res) {
            //         console.log(res);
            //     })
            // })
            tdModifica.append(btnModifica)
            tr.append(tdModifica)
            // ****** FINE BOTTONE MODIFICA

            // ***** BOTTONE ELIMINA
            let tdElimina = document.createElement('td')
            let btnElimina = document.createElement('button')
            btnElimina.innerHTML = '<i class="bi bi-trash"></i>'
            btnElimina.classList.add('btn', 'btn-danger')
            btnElimina.addEventListener('click', function () {
                fetch(APPURL + '/' + utente.id, {
                    method: 'DELETE'
                }).then(function (res) {
                    console.log(res);
                })
            })
            tdElimina.append(btnElimina)
            tr.append(tdElimina)
            // ****** FINE BOTTONE ELIMINA

            tabella.append(tr)

            console.log(APPURL + '/' + utente.id);
        }
    })

//******* AGGIUNGI UTENTE
let bottone = document.querySelector('#aggiungi')

bottone.addEventListener('click', function (e) {
    e.preventDefault()

    let name = document.querySelector('#name')
    let username = document.querySelector('#username')
    let email = document.querySelector('#email')
    let number = document.querySelector('#number')
    let website = document.querySelector('#website')

    let user = {
        name: name.value,
        username: username.value,
        email: email.value,
        number: number.value,
        website: website.value
    }

    fetch(APPURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .then(function (res) {
            console.log(res);
        })
})
console.log('test1');

let bottoneVedi = document.querySelectorAll('.viewButton');
console.log(bottoneVedi);
let vediModal = document.getElementById('viewModalContent');
let provaTesto = 'testblabla';

// for (let vedi of bottoneVedi) {
//     vedi.addEventListener('click', function () {
//         vediModal.append(provaTesto)
//         console.log('test2');
//     })
// }

// bottoneVedi.addEventListener('click', function () {
//     console.log('test_vedi');
// })

for (var i = 0; i < bottoneVedi.length; i++) {
    bottoneVedi[i].addEventListener('click', function () {
        console.log(provaTesto);
    });
}

// for (let vedi of bottoneVedi) {
//     vedi.addEventListener('click', function () {
//         console.log('che che che');
//     });
// }

// const toggleButton = document.getElementById("toggle-btn"); // Get the element
// toggleButton.addEventListener("click", checkButtonClass);

// consigli flavio:
// Non usare file .json
// Utilizziamo il file json online con l'URL, ma non potremo aggiungere o cancellare nel json

// ****** BOTTONE MODIFICA (BACKUP)
// let tdModifica = document.createElement('td')
// let btnModifica = document.createElement('button')
// btnModifica.innerHTML = '<i class="bi bi-pencil-square"></i>'
// btnModifica.classList.add('btn', 'btn-warning')
// btnModifica.addEventListener('click', function () {
//     fetch(APPURL + '/' + utente.id, {
//         method: 'PUT'
//     }).then(function (res) {
//         console.log(res);
//     })
// })
// tdModifica.append(btnModifica)
// tr.append(tdModifica)
// ****** FINE BOTTONE MODIFICA