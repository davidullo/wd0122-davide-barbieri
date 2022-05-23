var numeroVincente = Math.round(Math.random() * (100 - 1) + 1);
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
var giocatore2 = {
    nome: 'Marco',
    numero: Math.round(Math.random() * (100 - 1) + 1)
};
ris1.append("Numero di ".concat(giocatore1.nome, ": ").concat(giocatore1.numero));
ris2.append("Numero di ".concat(giocatore2.nome, ": ").concat(giocatore2.numero));
ris3.append("Numero vincente: ".concat(numeroVincente));
var differenza1;
var differenza2;
if (numeroVincente > giocatore1.numero) {
    differenza1 = numeroVincente - giocatore1.numero;
}
else if (numeroVincente < giocatore1.numero) {
    differenza1 = giocatore1.numero - numeroVincente;
}
if (numeroVincente > giocatore2.numero) {
    differenza2 = numeroVincente - giocatore2.numero;
}
else if (numeroVincente < giocatore2.numero) {
    differenza2 = giocatore2.numero - numeroVincente;
}
var risultato = document.getElementById('risultato');
if (giocatore1.numero == numeroVincente) {
    risultato.innerHTML = "<b>".concat(giocatore1.nome, "</b><br> ha indovinato il numero!");
}
else if (giocatore2.numero == numeroVincente) {
    risultato.innerHTML = "<b>".concat(giocatore2.nome, "</b><br> ha indovinato il numero!");
}
else if (differenza1 < differenza2) {
    risultato.innerHTML = "<b>".concat(giocatore1.nome, "</b><br> si \u00E8 avvicinato di pi\u00F9 al numero vincente!");
}
else if (differenza1 > differenza2) {
    risultato.innerHTML = "<b>".concat(giocatore2.nome, "</b><br> si \u00E8 avvicinato di pi\u00F9 al numero vincente!");
}
else if (differenza1 == differenza2) {
    risultato.innerHTML = "<b>".concat(giocatore1.nome, "</b> e <b>").concat(giocatore2.nome, "</b><br> si sono entrambi avvicinati al numero vincente!");
}
else {
    risultato.innerHTML = "<b>".concat(giocatore1.nome, "</b> e <b>").concat(giocatore2.nome, "</b><br> hanno indovinato il numero vincente!");
}
