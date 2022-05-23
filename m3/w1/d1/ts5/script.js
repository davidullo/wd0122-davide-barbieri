// tipi di dato
var str = 'testo'; // dato testuale
var num = 1000; //dato numerico
var bool = false; //dato booleano
var obj = {}; // dato oggetto. Questo è gia un oggetto.
var arr = []; // dato array
var strArr = ['Marco', 'Lucia', 'Maria']; // array di stringhe. Non ci posso mettere dei numeri
var numArr = [0, 1, 2];
var objArr = [{}, {}, {}, {}, {}, {}, {}];
var anyArr = [{}, 'Marco', 3];
var any = 'ciao'; //qualunque tipo di dato
var unk = 12; // è un tipo di any più restrittivo. Dato sconosciuto
var union = 'test';
union = {};
// funzioni
function saluta(testo, tag) {
    var t = document.createElement(tag);
    t.innerHTML = testo;
    return t;
}
// function saluta(testo: string): void { // con "void" diventa una funzione che esegue, e non è necessario che restituisca un valore
//     console.log(testo);
//     return testo;
// }
console.log(saluta('ciao', 'b'));
