console.log('test');
class Car {
    public modello: string // public è un modificatore di visibilità (private, public e protected). Il public è implicito, quindi c'è anche se non lo scriviamo. DI regola si dovrebbe scrivere sempre per chiarezza
    public marca: string
    public colore: string
    protected prezzo: number
    protected scontoRivenditore: number = 30;
    constructor(mod: string, mar: string, col: string, p: number) {
        this.modello = mod;
        this.marca = mar;
        this.colore = col;
        this.prezzo = p;
    }

    public dettagliAuto(): string {
        return this.modello + " " + this.marca + " " + this.colore;
    }

    public set cambiaScontoRivenditore(n: number) { // metodo che consente la sola scrittura
        this.scontoRivenditore = n
        // return '' // i setter non possono restituire un valore
    }

    public get prezzoFinale(): string { // il get non accetta parametri d'ingresso. Metodo per la sola lettura di dati
        return this.prezzo - ((this.prezzo * this.scontoRivenditore) / 100) + '€'
    }
    // public prezzoFinale(): number {
    //     return this.prezzo - ((this.prezzo * this.scontoRivenditore) / 100)
    // }

    public static nazione(): void {
        console.log('Italia');
    }

}
let fiat = new Car('500', 'Fiat', 'Grigio', 10000);
fiat.cambiaScontoRivenditore = 20 // il setter (di cambiaScontoRivenditore) modifica anche le proprietà con accesso privato o protetto
console.log(fiat.prezzoFinale);

// console.log(fiat.modello, fiat.scontoRivenditore); // non posso accedere alle proprietà protette o private

console.log(fiat);

// fiat.nazione() // non posso usarlo così, perché non è legato all'oggetto, ma alla classe, infatti...
Car.nazione(); // ... così funzionerà

// le proprietà statiche possono avere a che fare solo con metodi statici, e viceversa. Vanno quindi insieme.