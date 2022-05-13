const APPURL = 'json/users.json'
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
            let tdNickname = document.createElement('td')
            tdNickname.innerHTML = utente.username
            let tdFirstname = document.createElement('td')
            tdFirstname.innerHTML = utente.firstName
            let tdLastname = document.createElement('td')
            tdLastname.innerHTML = utente.lastName
            let tdGender = document.createElement('td')
            tdGender.innerHTML = utente.gender
            let tdEmail = document.createElement('td')
            tdEmail.innerHTML = utente.email
            let tdPhoto = document.createElement('td')
            tdPhoto.innerHTML = '<img src="' + utente.profileURL + '"' + ' height="40" width="40" class="rounded-circle">'
            // tdPhoto.innerHTML = `<img src="${utente.ProfileURL}" alt="" srcset="" >`
            tr.append(tdNickname, tdFirstname, tdLastname, tdGender, tdEmail, tdPhoto)

            // ***** DECOMMENTARE PER AGGIUNGERE BOTTONE ELIMINA: NON FUNZIONA IN LOCALE
            // let tdAzioni = document.createElement('td')
            // let btnElimina = document.createElement('button')
            // btnElimina.innerHTML = 'Elimina'
            // btnElimina.classList.add('btn', 'btn-danger')
            // btnElimina.addEventListener('click', function () {
            //     fetch(APPURL + '/' + utente.id, {
            //         method: 'DELETE'
            //     })
            // })
            // tdAzioni.append(btnElimina)
            // tr.append(tdAzioni)
            // ****** FINE SEZIONE BOTTONE ELIMINA

            tabella.append(tr)
        }
    })