const APPURL = 'https://jsonplaceholder.typicode.com/users'
let tabella = document.querySelector('#tbody')
let editNome = document.getElementById('editNome')
let editUsername = document.getElementById('editUsername')
let editEmail = document.getElementById('editEmail')
let editTelefono = document.getElementById('editTelefono')
let editWebsite = document.getElementById('editWebsite')
let editVia = document.getElementById('editVia')
let editCivico = document.getElementById('editCivico')
let editCitta = document.getElementById('editCitta')
let editCap = document.getElementById('editCap')
let editID = document.getElementById('idUtente')
let vediModal = document.getElementById('viewModalContent')
let btnAvanti = document.getElementById('btnAvanti')
let btnIndietro = document.getElementById('btnIndietro')
let selectPages = document.getElementById('selectPages');
let usersPerPage = selectPages.value;
console.log(usersPerPage);
let currentPage = 0;
let start = 0;
let righe = [];

function avanti() {
    currentPage++
    tabella.innerHTML = ''
    for (let l = currentPage * selectPages.value; l < selectPages.value * (currentPage + 1); l++) {
        tabella.append(righe[l]);
    }
}
function indietro() {
    currentPage--
    tabella.innerHTML = ''
    for (let l = currentPage * selectPages.value; l > selectPages.value * (currentPage - 1); l--) {
        tabella.append(righe[l]);
    }
}

btnAvanti.addEventListener('click', avanti)
btnIndietro.addEventListener('click', indietro)

fetch(APPURL)
    .then(res => res.json())
    .then(res => {
        //**** paginazione */

        selectPages.addEventListener('change', function pageNumber() {
            tabella.innerHTML = ''
            for (let l = 0; l <= this.value - 1; l++) {
                tabella.append(righe[l]);
            }
        })

        console.log(res);
        for (let utente of res) {
            let table = document.getElementById('utenti')
            table.classList.add('table')
            table.classList.add('table-bordered')
            table.classList.add('table-striped')
            let tr = document.createElement('tr')
            let tdID = document.createElement('td')
            tdID.innerHTML = utente.id
            tdID.classList.add('fw-bold', 'text-center', 'align-middle')
            let tdName = document.createElement('td')
            tdName.innerHTML = utente.name
            tdName.classList.add('align-middle')
            let tdUser = document.createElement('td')
            tdUser.innerHTML = utente.username
            tdUser.classList.add('align-middle')
            let tdEmail = document.createElement('td')
            tdEmail.innerHTML = utente.email
            tdEmail.classList.add('align-middle')
            let tdPhone = document.createElement('td')
            tdPhone.innerHTML = utente.phone
            tdPhone.classList.add('align-middle')
            let tdWebsite = document.createElement('td')
            tdWebsite.innerHTML = utente.website
            tdWebsite.classList.add('align-middle')
            tr.append(tdID, tdUser, tdName, tdEmail, tdPhone, tdWebsite)



            // ****** BOTTONE VEDI
            let tdVedi = document.createElement('td')
            tdVedi.classList.add('text-center')
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
                    if (vediModal.innerHTML !== "") {
                        vediModal.innerHTML = ""
                        vediModal.innerHTML = (` <h4>ID</h4> <p> ${utente.id} </p> <hr> <h4>Username</h4> <p> ${utente.username} </p> <hr> <h4>Nome e cognome</h4> <p> ${utente.name} </p> <hr> <h4>Email</h4> <p> ${utente.email} </p> <hr> <h4>Numero</h4> <p> ${utente.phone} </p> <hr> <h4>Sito web</h4> <p> ${utente.website} </p> <hr> <h4>Indirizzo</h4> <h5>Via</h5> <p> ${utente.address.street} </p> <h5>N° civico</h5> <p> ${utente.address.suite} </p> <h5>Città</h5> <p> ${utente.address.city} </p> <h5>CAP</h5> <p> ${utente.address.zipcode} </p>`)
                    } else (vediModal.innerHTML = (` <h4>ID</h4> <p> ${utente.id} </p> <hr> <h4>Username</h4> <p> ${utente.username} </p> <hr> <h4>Nome e cognome</h4> <p> ${utente.name} </p> <hr> <h4>Email</h4> <p> ${utente.email} </p> <hr> <h4>Numero</h4> <p> ${utente.phone} </p> <hr> <h4>Sito web</h4> <p> ${utente.website} </p> <hr> <h4>Indirizzo</h4> <h5>Via</h5> <p> ${utente.address.street} </p> <h5>N° civico</h5> <p> ${utente.address.suite} </p> <h5>Città</h5> <p> ${utente.address.city} </p> <h5>CAP</h5> <p> ${utente.address.zipcode} </p>`));
                })
            })
            tdVedi.append(btnVedi)
            tr.append(tdVedi)

            // ****** BOTTONE MODIFICA
            let tdModifica = document.createElement('td')
            tdModifica.classList.add('text-center')
            let btnModifica = document.createElement('button')
            btnModifica.innerHTML = '<i class="bi bi-pencil-square"></i>'
            btnModifica.setAttribute("data-bs-toggle", "modal");
            btnModifica.setAttribute("data-bs-target", "#editModal");
            btnModifica.classList.add('btn', 'btn-warning', 'editButton')
            btnModifica.addEventListener('click', function () {
                fetch(APPURL + '/' + utente.id, {
                    method: 'GET'
                }).then(function (res) {
                    console.log(res);
                    editNome.value = utente.name
                    editUsername.value = utente.username
                    editEmail.value = utente.email
                    editTelefono.value = utente.phone
                    editWebsite.value = utente.website
                    editVia.value = utente.address.street
                    editCivico.value = utente.address.suite
                    editCitta.value = utente.address.city
                    editCap.value = utente.address.zipcode
                    editID.value = utente.id
                })

            })

            tdModifica.append(btnModifica)
            tr.append(tdModifica)

            // ***** BOTTONE ELIMINA
            let tdElimina = document.createElement('td')
            tdElimina.classList.add('text-center')
            let btnElimina = document.createElement('button')
            btnElimina.innerHTML = '<i class="bi bi-trash"></i>'
            btnElimina.classList.add('btn', 'btn-danger')
            btnElimina.addEventListener('click', function () {
                fetch(APPURL + '/' + utente.id, {
                    method: 'DELETE'
                }).then(function (res) {
                    console.log(res);
                }).then(res => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Utente eliminato',
                        html: `L'utente ${utente.name} è stato eliminato con successo!`,
                    })
                })
            })
            tdElimina.append(btnElimina)
            tr.append(tdElimina)
            tabella.append(tr)
            // console.log(APPURL + '/' + utente.id);
        }
        righe = document.querySelectorAll('#tbody tr')
    })



//******* AGGIUNGI UTENTE
let bottone = document.querySelector('#aggiungi')

bottone.addEventListener('click', function (e) {
    e.preventDefault()

    let name = document.querySelector('#name')
    let username = document.querySelector('#username')
    let email = document.querySelector('#email')
    let telefono = document.querySelector('#telefono')
    let website = document.querySelector('#website')
    let via = document.querySelector('#via')
    let civico = document.querySelector('#civico')
    let citta = document.querySelector('#citta')
    let cap = document.querySelector('#cap')

    let user = {
        name: name.value,
        username: username.value,
        email: email.value,
        phone: telefono.value,
        website: website.value,
        address: {
            street: via.value,
            suite: civico.value,
            city: citta.value,
            zipcode: cap.value,
        }
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
        }).then(res => {
            Swal.fire({
                icon: 'success',
                title: 'Utente aggiunto',
                html: `L'utente ${user.name} è stato aggiunto con successo!`,
            })

        })
})

console.log('test1');

let salvaModifica = document.getElementById('salvaModifica')
salvaModifica.addEventListener('click', function () {

    let user = {
        name: editNome.value,
        username: editUsername.value,
        email: editEmail.value,
        phone: editTelefono.value,
        website: editWebsite.value,
        address: {
            street: editVia.value,
            suite: editCivico.value,
            city: editCitta.value,
            zipcode: editCap.value,
        }
    }

    fetch(APPURL + '/' + editID.value, {
        method: 'PUT',
        body: JSON.stringify(user)
    }).then(function (res) {
        console.log(res);

    }).then(res => {
        Swal.fire({
            icon: 'success',
            title: 'Utente aggiornato',
            html: `L'utente ${user.name} è stato aggiornato con successo!`,
        })

    })
})


// ************* SEARCH BAR

const userCardTemplate = document.querySelector('[data-user-template]')
const userCardContainer = document.querySelector('[data-user-cards-container]')

const card = document.querySelectorAll('.card')
const searchInput = document.querySelector('[data-search]')

let users = []

searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    users.forEach(user => {
        const isVisible =
            user.name.toLowerCase().includes(value) ||
            user.username.toLowerCase().includes(value) ||
            user.email.toLowerCase().includes(value) ||
            user.website.toLowerCase().includes(value) ||
            user.phone.toLowerCase().includes(value)
        user.element.classList.toggle('hide', !isVisible)
        if (searchInput.value == '') {
            userCardContainer.classList.add('d-none')
        } else {
            userCardContainer.classList.remove('d-none')
        }

    });
})

fetch(APPURL)
    .then(res => res.json())
    .then(data => {
        users = data.map(user => {
            const card = userCardTemplate.content.cloneNode(true).children[0]
            const header = card.querySelector('[data-header]')
            const username = card.querySelector('[data-username]')
            const body = card.querySelector('[data-body]')
            const website = card.querySelector('[data-website]')
            const phone = card.querySelector('[data-phone]')
            header.textContent = `${user.name}`
            username.textContent = `Username: ${user.username}`
            body.textContent = `Email: ${user.email}`
            website.textContent = `Sito web: ${user.website}`
            phone.textContent = `Numero: ${user.phone}`
            userCardContainer.append(card)
            card.addEventListener("click", () => {
                document.getElementsByClassName("viewButton")[user.id - 1].click()
                const id = card.querySelector('[data-id]')
                id.textContent = user.id
            })
            return { name: user.name, username: user.username, email: user.email, website: user.website, phone: user.phone, element: card }
        })
    })

// ******** PAGINAZIONE
// let btnAvanti = document.getElementById('btnAvanti')
// let btnIndietro = document.getElementById('btnIndietro')
// let selectPages = document.getElementById('selectPages');
// let usersPerPage = selectPages.value;
// console.log(usersPerPage);
// let currentPage = 1;
// let start = 0;

// fetch(APPURL)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data.length)
//         selectPages.addEventListener('change', function pageNumber() {
//             console.log('Hai selezionato: ', this.value);
//             if (this.value == 2 || this.value == 5 || this.value == 10) {
//                 console.log(Math.ceil(data.length / (data.length / this.value)));
//             } else {
//                 console.log(Math.ceil(data.length / (data.length / 10)));
//             }
//             // CONTINUARE DA QUI ...
//             let elementiVisibili = data.length - this.value;
//             console.log(elementiVisibili);
//             let elementiDaCancellare = data.length - elementiVisibili;
//             let elementiNonVisibili = (data.slice(elementiDaCancellare));
//             for (let singolo of elementiNonVisibili) {
//                 console.log(singolo);
//             }
//             console.log(elementiNonVisibili);
//         })
//     })

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        changePage(currentPage);
    }
}

function nextPage() {
    if (currentPage < pageNumber()) {
        currentPage++;
        changePage(currentPage);
    }
}