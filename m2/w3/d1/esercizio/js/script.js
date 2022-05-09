class Database {
    constructor(x) {
        this.parent = document.querySelector(x);
        this.nome = ''
        this.cognome = ''
        this.nascita = ''
        this.bottone = ''
        this.creaInput()
        this.button.addEventListener('click', () => { this.creaOutput() })
    }

    creaInput() {
        let nomeH2 = document.createElement('h2')
        nomeH2.innerHTML = 'Nome'
        let nomeInput = document.createElement('input')
        nomeInput.classList.add('form-control')
        nomeInput.type = 'text'
        nomeInput.setAttribute('id', 'nome')
        this.nome = nomeInput
        let cognomeH2 = document.createElement('h2')
        cognomeH2.innerHTML = 'Cognome'
        cognomeH2.classList.add('mt-4')
        let cognomeInput = document.createElement('input')
        cognomeInput.classList.add('form-control')
        cognomeInput.type = 'text'
        cognomeInput.setAttribute('id', 'cognome')
        this.cognome = cognomeInput
        let dataH2 = document.createElement('h2')
        dataH2.innerHTML = 'Data di nascita'
        dataH2.classList.add('mt-4')
        let dataNascita = document.createElement('input')
        dataNascita.type = 'date'
        dataNascita.setAttribute('id', 'dataNascita')
        this.nascita = dataNascita
        let bottone = document.createElement('button')
        bottone.classList.add('btn')
        bottone.classList.add('btn-primary')
        bottone.classList.add('ms-3')
        bottone.innerHTML = 'Aggiungi'
        this.button = bottone
        this.parent.append(nomeH2, nomeInput, cognomeH2, cognomeInput, dataH2, dataNascita, bottone)
    }

    creaOutput() {
        let output = document.querySelector('#output')
        let nomeCognomeH5 = document.createElement('h5')
        nomeCognomeH5.innerHTML = 'Nome e Cognome'
        let outputNomeCognome = document.createElement('p')
        outputNomeCognome.innerHTML = this.nome.value + ' ' + this.cognome.value
        let NascitaH5 = document.createElement('h5')
        NascitaH5.innerHTML = 'Data di nascita'
        let outputNascita = document.createElement('p')
        outputNascita.innerHTML = this.nascita.value
        output.append(nomeCognomeH5, outputNomeCognome, NascitaH5, outputNascita)
        this.nome.value = ''
        this.cognome.value = ''
    }
}
let database = new Database('#input')