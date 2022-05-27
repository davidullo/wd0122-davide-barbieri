interface ISmartphone {
    nome: string; // nome e cognome dell'utente
    numeroTelefono: number; // numero di telefono
    carica: number; // quantitativo di euro disponibile per le chiamate
    numeroChiamate: number; // numero chiamate effettuate
    costoAlMinuto: number; // costo al minuto
    ricarica(unaRicarica: number): void; // metodo che ricarica il tel
    chiamata(minutiDurata: number): void; // metodo che effettua chiamate in minuti, aggiornando la carica disponibile e incrementando il numero di chiamate effettuate. Costo: 0.20euro per ogni minuto.
    numero404(): number; // metodo che restituisce il valore della carica disponibile
    getNumeroChiamate(): number; // metodo che restituisce il valore della variabile "numeroChiamate"
    azzeraChiamate(): void; // metodo che azzera la variabile "numeroChiamate"
}

class FirstUser implements ISmartphone {
    public nome: string;
    public numeroTelefono: number;
    public carica: number;
    public numeroChiamate: number = 0;
    costoAlMinuto: number = 0.20;

    constructor(nome: string, numeroTelefono: number, carica: number) {
        this.nome = nome;
        this.numeroTelefono = numeroTelefono;
        this.carica = carica;
    }

    public ricarica(quantita: number): void {
        this.carica += quantita;
    }

    public chiamata(minuti: number): void {
        let costoChiamata = minuti * 0.20;
        this.carica -= costoChiamata;
        this.numeroChiamate++;
    }

    public numero404(): number {
        return this.carica;
    }

    public getNumeroChiamate(): number {
        return this.numeroChiamate;
    }

    public azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }
}

class SecondUser implements ISmartphone {
    public nome: string;
    public numeroTelefono: number;
    public carica: number;
    public numeroChiamate: number = 0;
    costoAlMinuto: number = 0.20;

    constructor(nome: string, numeroTelefono: number, carica: number) {
        this.nome = nome;
        this.numeroTelefono = numeroTelefono;
        this.carica = carica;
    }

    public ricarica(quantita: number): void {
        this.carica += quantita;
    }

    public chiamata(minuti: number): void {
        let costoChiamata = minuti * 0.20;
        this.carica -= costoChiamata;
        this.numeroChiamate++;
    }

    public numero404(): number {
        return this.carica;
    }

    public getNumeroChiamate(): number {
        return this.numeroChiamate;
    }

    public azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }
}

class ThirdUser implements ISmartphone {
    public nome: string;
    public numeroTelefono: number;
    public carica: number;
    public numeroChiamate: number = 0;
    costoAlMinuto: number = 0.20;

    constructor(nome: string, numeroTelefono: number, carica: number) {
        this.nome = nome;
        this.numeroTelefono = numeroTelefono;
        this.carica = carica;
    }

    public ricarica(quantita: number): void {
        this.carica += quantita;
        console.log(`L'utente ${utente3.nome} ha effettuato una ricarica di ${quantita}€. Credito residuo: ${utente3.carica}€.`);
    }

    public chiamata(minuti: number): void {
        // let costoAlMinuto: any = 0.20; // mettendo il tipo number restituisce errore
        let costoChiamata = minuti * this.costoAlMinuto; // aggiungere il metodo .toFixed(2) per arrotondare a 2 decimali: dà problemi con i calcoli.
        if (this.carica >= this.costoAlMinuto) {
            this.carica -= costoChiamata;
            this.numeroChiamate++;
            console.log(`L'utente ${utente3.nome} ha effettuato ${utente3.numeroChiamate} chiamate. Credito residuo: ${utente3.carica}€.`);
        } else {
            console.log(`Credito insufficiente! Credito residuo: ${utente3.carica}€.`);
        }
    }

    public numero404(): number {
        console.log(`Credito residuo di ${utente3.nome}: ${utente3.carica}€.`);
        return this.carica;
    }

    public getNumeroChiamate(): number {
        return this.numeroChiamate;
    }

    public azzeraChiamate(): void {
        this.numeroChiamate = 0;
        console.log(`Hai azzerato le chiamate di ${utente3.nome}: ${utente3.numeroChiamate} chiamate.`);
    }
}

// parametri > nome, numero, credito.
let utente1 = new FirstUser('Davide Barbieri', 123456789, 10)
let utente2 = new SecondUser('Mario Rossi', 987654321, 20)
let utente3 = new ThirdUser('Alice Bianchi', 321654987, 5)

// Verificare il saldo residuo di ogni utente e quante chiamate sono state effettuate
console.log(utente1);
utente1.chiamata(2)
utente1.chiamata(8)
utente1.chiamata(5)
utente1.chiamata(2)
// Decommentare sotto per azzerare le chiamate
// utente1.azzeraChiamate()
utente1.chiamata(2)
utente1.chiamata(7)
console.log(`L'utente ${utente1.nome} ha effettuato ${utente1.numeroChiamate} chiamate. Credito residuo: ${utente1.carica}€.`);
console.log('------------------');

console.log(utente2);
utente2.chiamata(5)
utente2.chiamata(11)
utente2.chiamata(7)
utente2.chiamata(9)
// Decommentare sotto per azzerare le chiamate
// utente2.azzeraChiamate()
utente2.chiamata(1)
utente2.chiamata(8)
utente2.chiamata(17)
utente2.chiamata(3)
console.log(`L'utente ${utente2.nome} ha effettuato ${utente2.numeroChiamate} chiamate. Credito residuo: ${utente2.carica}€.`);
console.log('------------------');

console.log(utente3);
utente3.chiamata(2)
utente3.chiamata(3)
utente3.chiamata(5)
// Decommentare sotto per azzerare le chiamate
// utente3.azzeraChiamate()
utente3.chiamata(2)
utente3.chiamata(7)
console.log(`L'utente ${utente3.nome} ha effettuato ${utente3.numeroChiamate} chiamate. Credito residuo: ${utente3.carica}€.`);
console.log('------------------');

let btnChiamata: HTMLElement | null = document.getElementById('chiamata')
if (btnChiamata != null) {
    btnChiamata.addEventListener('click', function () {
        utente3.chiamata(1)
    })
}

let btnRicarica: HTMLElement | null = document.getElementById('ricarica')
if (btnRicarica != null) {
    btnRicarica.addEventListener('click', function () {
        utente3.ricarica(5)
    })
}

let btnCredito: HTMLElement | null = document.getElementById('credito')
if (btnCredito != null) {
    btnCredito.addEventListener('click', function () {
        utente3.numero404()
    })
}

let btnAzzera: HTMLElement | null = document.getElementById('azzera')
if (btnAzzera != null) {
    btnAzzera.addEventListener('click', function () {
        utente3.azzeraChiamate()
    })
}