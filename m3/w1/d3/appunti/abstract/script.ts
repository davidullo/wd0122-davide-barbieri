abstract class Veicoli {
    public ruote: number;
    public marca: string;
    public modello: string;
    protected prezzo: number;
    public tipo: string;
    constructor(ruote: number, marca: string, modello: string, prezzo: number, tipo: string) {
        this.ruote = ruote;
        this.marca = marca;
        this.modello = modello;
        this.prezzo = prezzo;
        this.tipo = tipo;
    }

    public abstract speed: number;
    public abstract aumentaVelocita(vel: number): void // le classi astratte non devono avere una funzionalità (cioè la parte con {} delle funzioni)

    dettagliVeicolo() {
        return `Modello: ${this.modello}, Marca: ${this.marca}, Ruote: ${this.ruote}`
    }
}

class Automobili extends Veicoli {
    public speed: number = 0;
    public aumentaVelocita(vel?: number): void { // il ? significa che il parametro è facoltativo
        if (!vel) {
            this.speed++
        } else {
            this.speed += vel;
        }
    }
    public riduciVelocita(vel?: number): void {
        if (vel == undefined) {
            this.speed--;
        } else {
            this.speed -= vel;
        }
    }
}

let veicolo = new Automobili(3, 'Piaggio', '', 1500, 'apecar');
veicolo.aumentaVelocita();
veicolo.aumentaVelocita(5);
veicolo.riduciVelocita()
veicolo.riduciVelocita(5)
console.table(veicolo);
console.log(veicolo.dettagliVeicolo());
