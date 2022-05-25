var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Lavoratore = /** @class */ (function () {
    function Lavoratore(codRed, redditoAnnuo, tasseInps, tasseIrpef) {
        this.codRed = codRed;
        this.redditoAnnuo = redditoAnnuo;
        this.tasseInps = tasseInps;
        this.tasseIrpef = tasseIrpef;
    }
    Lavoratore.prototype.getTasseInps = function () {
        var totaleInps = (this.redditoAnnuo * this.tasseInps) / 100;
        return totaleInps;
    };
    Lavoratore.prototype.getTasseIrpef = function () {
        var totaleIrpef = (this.redditoAnnuo * this.tasseIrpef) / 100;
        return totaleIrpef;
    };
    Lavoratore.prototype.getUtileTasse = function () {
        var utileTasse = this.redditoAnnuo + ((this.redditoAnnuo + this.codRed) / 100);
        return utileTasse;
    };
    Lavoratore.prototype.getRedditoAnnuoNetto = function () {
        var redditoAnnuoNetto = this.redditoAnnuo - (this.totaleInps + this.totaleIrpef);
        return redditoAnnuoNetto;
    };
    return Lavoratore;
}());
var Artigiano = /** @class */ (function (_super) {
    __extends(Artigiano, _super);
    function Artigiano(codRed, redditoAnnuo, tasseInps, tasseIrpef) {
        return _super.call(this, codRed, redditoAnnuo, tasseInps, tasseIrpef) || this;
    }
    return Artigiano;
}(Lavoratore));
// class LiberoProfessionista extends Lavoratore {
//     getRedditoAnnuoNetto(): number {
//     }
// }
// class Commerciante extends Lavoratore {
//     getRedditoAnnuoNetto(): number {
//     }
// }
var l1 = new Artigiano(1.5, 10000, 5, 7);
console.log('utile tasse ARTIGIANO:' + l1.getUtileTasse() + '€');
console.log('tasse inps ARTIGIANO:' + l1.getTasseInps() + '€');
console.log('tasse irpef ARTIGIANO:' + l1.getTasseIrpef() + '€');
console.log('reddito annuo netto ARTIGIANO:' + l1.getRedditoAnnuoNetto() + '€');
console.log('-------------------------------------------------');
// let l2 = new LiberoProfessionista(20000, 8);
// console.log('utile tasse ARTIGIANO:' + l1.getUtileTasse() + '€');
// console.log('tasse inps ARTIGIANO:' + l1.getTasseInps() + '€');
// console.log('tasse irpef ARTIGIANO:' + l1.getTasseIrpef() + '€');
// console.log('reddito annuo netto ARTIGIANO:' + l1.getRedditoAnnuoNetto() + '€');
// console.log('-------------------------------------------------');
// let l3 = new Commerciante(25000, 7);
// console.log('utile tasse ARTIGIANO:' + l1.getUtileTasse() + '€');
// console.log('tasse inps ARTIGIANO:' + l1.getTasseInps() + '€');
// console.log('tasse irpef ARTIGIANO:' + l1.getTasseIrpef() + '€');
// console.log('reddito annuo netto ARTIGIANO:' + l1.getRedditoAnnuoNetto() + '€');
// console.log('-------------------------------------------------');
