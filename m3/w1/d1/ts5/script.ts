// tipi di dato

let str: string = 'testo' // dato testuale
let num: number = 1000 //dato numerico
let bool: boolean = false //dato booleano
let obj: object = {} // dato oggetto. Questo è gia un oggetto.
let arr: [] = [] // dato array
let strArr: string[] = ['Marco', 'Lucia', 'Maria'] // array di stringhe. Non ci posso mettere dei numeri
let numArr: number[] = [0, 1, 2]
let objArr: object[] = [{}, {}, {}, {}, {}, {}, {}]
let anyArr: any[] = [{}, 'Marco', 3]
let any: any = 'ciao' //qualunque tipo di dato
let unk: unknown = 12 // è un tipo di any più restrittivo. Dato sconosciuto

let union: (string | object) = 'test'
union = {}

// funzioni

function saluta(testo: string, tag: string): HTMLElement {
    let t: HTMLElement = document.createElement(tag) // creo un tag ma non lo visualizzo
    t.innerHTML = testo
    return t;
}
// function saluta(testo: string): void { // con "void" diventa una funzione che esegue, e non è necessario che restituisca un valore
//     console.log(testo);
//     return testo;
// }

console.log(saluta('ciao', 'b'));
