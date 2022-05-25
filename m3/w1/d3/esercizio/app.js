"use strict";
class Lavoratore {
    constructor(codRed, redditoAnnuo, tasseInps, tasseIrpef) {
        this.codRed = codRed;
        this.redditoAnnuo = redditoAnnuo;
        this.tasseInps = tasseInps;
        this.tasseIrpef = tasseIrpef;
    }
    getTasseInps() {
        let totaleInps = (this.redditoAnnuo * this.tasseInps) / 100;
        return totaleInps;
    }
    getTasseIrpef() {
        let totaleIrpef = (this.redditoAnnuo * this.tasseIrpef) / 100;
        return totaleIrpef;
    }
    getUtileTasse() {
        let utileTasse = this.redditoAnnuo + ((this.redditoAnnuo + this.codRed) / 100);
        return utileTasse;
    }
    getRedditoAnnuoNetto() {
        let redditoAnnuoNetto = this.redditoAnnuo - (this.getTasseInps() + this.getTasseIrpef());
        return redditoAnnuoNetto;
    }
}
class Artigiano extends Lavoratore {
    constructor(codRed, redditoAnnuo, tasseInps, tasseIrpef) {
        super(codRed, redditoAnnuo, tasseInps, tasseIrpef);
    }
}
class LiberoProfessionista extends Lavoratore {
    constructor(codRed, redditoAnnuo, tasseInps, tasseIrpef) {
        super(codRed, redditoAnnuo, tasseInps, tasseIrpef);
    }
}
class Commerciante extends Lavoratore {
    constructor(codRed, redditoAnnuo, tasseInps, tasseIrpef) {
        super(codRed, redditoAnnuo, tasseInps, tasseIrpef);
    }
}
let l1 = new Artigiano(1.5, 10000, 5, 7);
console.log('utile tasse ARTIGIANO:' + l1.getUtileTasse() + '€');
console.log('tasse inps ARTIGIANO:' + l1.getTasseInps() + '€');
console.log('tasse irpef ARTIGIANO:' + l1.getTasseIrpef() + '€');
console.log('reddito annuo netto ARTIGIANO:' + l1.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');
let l2 = new LiberoProfessionista(1.5, 24000, 9, 11);
console.log('utile tasse Libero professionista:' + l2.getUtileTasse() + '€');
console.log('tasse inps Libero professionista:' + l2.getTasseInps() + '€');
console.log('tasse irpef Libero professionista:' + l2.getTasseIrpef() + '€');
console.log('reddito annuo netto Libero professionista:' + l2.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');
let l3 = new Commerciante(1.5, 32000, 12, 20);
console.log('utile tasse Commerciante:' + l3.getUtileTasse() + '€');
console.log('tasse inps Commerciante:' + l3.getTasseInps() + '€');
console.log('tasse irpef Commerciante:' + l3.getTasseIrpef() + '€');
console.log('reddito annuo netto Commerciante:' + l3.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');
//# sourceMappingURL=app.js.map