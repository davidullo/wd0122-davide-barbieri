var numeroVincente = Math.round(Math.random() * (100 - 1) + 1);
console.log(numeroVincente);
var ris1 = document.getElementById('ris1');
var ris2 = document.getElementById('ris2');
var ris3 = document.getElementById('ris3');
var Giocatori = /** @class */ (function () {
    function Giocatori() {
    }
    return Giocatori;
}());
var giocatore1 = {
    nome: 'Davide',
    numero: Math.round(Math.random() * (100 - 1) + 1)
};
console.log(giocatore1);
var giocatore2 = {
    nome: 'Marco',
    numero: Math.round(Math.random() * (100 - 1) + 1)
};
console.log(giocatore2);
ris1.append("Numero di ".concat(giocatore1.nome, ": ").concat(giocatore1.numero));
ris2.append("Numero di ".concat(giocatore2.nome, ": ").concat(giocatore2.numero));
ris3.append("Numero vincente: ".concat(numeroVincente));
var differenza1;
var differenza2;
if (numeroVincente > giocatore1.numero) {
    differenza1 = numeroVincente - giocatore1.numero;
    console.log('numero vincente più grande. differenza del giocatore 1: ' + differenza1);
}
else if (numeroVincente < giocatore1.numero) {
    differenza1 = giocatore1.numero - numeroVincente;
    console.log('numero vincente più piccolo. differenza del giocatore 1: ' + differenza1);
}
if (numeroVincente > giocatore2.numero) {
    differenza2 = numeroVincente - giocatore2.numero;
    console.log('numero vincente più grande. differenza del giocatore 2: ' + differenza2);
}
else if (numeroVincente < giocatore2.numero) {
    differenza2 = giocatore2.numero - numeroVincente;
    console.log('numero vincente più piccolo. differenza del giocatore 2: ' + differenza2);
}
var risultato = document.getElementById('risultato');
if (giocatore1.numero == numeroVincente) {
    risultato.innerHTML = "<b>".concat(giocatore1.nome, "</b><br> ha indovinato il numero!");
    console.log("".concat(giocatore1.nome, " ha indovinato il numero!"));
}
else if (giocatore2.numero == numeroVincente) {
    risultato.innerHTML = "<b>".concat(giocatore2.nome, "</b><br> ha indovinato il numero!");
    console.log("".concat(giocatore2.nome, " ha indovinato il numero!"));
}
else if (differenza1 < differenza2) {
    risultato.innerHTML = "<b>".concat(giocatore1.nome, "</b><br> si \u00E8 avvicinato di pi\u00F9 al numero vincente!");
    console.log(giocatore1.nome + " si è avvicinato di più al numero vincente");
}
else {
    risultato.innerHTML = "<b>".concat(giocatore2.nome, "</b><br> si \u00E8 avvicinato di pi\u00F9 al numero vincente!");
    console.log(giocatore2.nome + " si è avvicinato di più al numero vincente");
}
