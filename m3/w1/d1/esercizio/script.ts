let numeroVincente: number = Math.round(Math.random() * (100 - 1) + 1)
console.log(numeroVincente);

let ris1 = document.getElementById('ris1')!
let ris2 = document.getElementById('ris2')!
let ris3 = document.getElementById('ris3')!

class Giocatori {
    nome!: string;
    numero!: number;
}

let giocatore1: Giocatori = {
    nome: 'Davide',
    numero: Math.round(Math.random() * (100 - 1) + 1)
}
console.log(giocatore1);

let giocatore2: Giocatori = {
    nome: 'Marco',
    numero: Math.round(Math.random() * (100 - 1) + 1)
}
console.log(giocatore2);

ris1.append(`Numero di ${giocatore1.nome}: ${giocatore1.numero}`)
ris2.append(`Numero di ${giocatore2.nome}: ${giocatore2.numero}`)
ris3.append(`Numero vincente: ${numeroVincente}`)

let differenza1!: number;
let differenza2!: number;

if (numeroVincente > giocatore1.numero) {
    differenza1 = numeroVincente - giocatore1.numero
    console.log('numero vincente più grande. differenza del giocatore 1: ' + differenza1);
} else if (numeroVincente < giocatore1.numero) {
    differenza1 = giocatore1.numero - numeroVincente
    console.log('numero vincente più piccolo. differenza del giocatore 1: ' + differenza1);
}

if (numeroVincente > giocatore2.numero) {
    differenza2 = numeroVincente - giocatore2.numero
    console.log('numero vincente più grande. differenza del giocatore 2: ' + differenza2);
} else if (numeroVincente < giocatore2.numero) {
    differenza2 = giocatore2.numero - numeroVincente
    console.log('numero vincente più piccolo. differenza del giocatore 2: ' + differenza2);
}

let risultato = document.getElementById('risultato')!

if (giocatore1.numero == numeroVincente) {
    risultato.innerHTML = `<b>${giocatore1.nome}</b><br> ha indovinato il numero!`
    console.log(`${giocatore1.nome} ha indovinato il numero!`);
} else if (giocatore2.numero == numeroVincente) {
    risultato.innerHTML = `<b>${giocatore2.nome}</b><br> ha indovinato il numero!`
    console.log(`${giocatore2.nome} ha indovinato il numero!`);
} else if (differenza1 < differenza2) {
    risultato.innerHTML = `<b>${giocatore1.nome}</b><br> si è avvicinato di più al numero vincente!`
    console.log(giocatore1.nome + " si è avvicinato di più al numero vincente");
} else {
    risultato.innerHTML = `<b>${giocatore2.nome}</b><br> si è avvicinato di più al numero vincente!`
    console.log(giocatore2.nome + " si è avvicinato di più al numero vincente");
}