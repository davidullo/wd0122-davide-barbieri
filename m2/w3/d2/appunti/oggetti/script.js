import SuperForms from "./Modules/SuperForms.js"
let input = SuperForms.createHTMLInputElement('text', 'form-control')
console.log(input);

// let r = new Rectangle() non funzioneerà perché la classe Rectangle è definita in una riga succesiva, cioè riga 2
// class Rectangle { }

// ----- Dichiarazione di classe
// class Rettangolo {
//     constructor(h, w) {
//         this.height = h;
//         this.width = w;
//     }
// }

// ------ Espressione di classe
// let Rettangolo = class {
//     constructor(h, w) {
//         this.height = h;
//         this.width = w;
//     }
//     prova() {
//         console.log(1)
//     }
//     prova() { // se ho 2 metodi con lo stesso nome, il secondo sovrascrive il primo
//         console.log(2)
//     }
// }

// let r = new Rettangolo(10, 300)
// r.prova() // posso lanciare il metodo ogni volta che voglio

// console.log(Rettangolo.name);
// let r = new Rettangolo(100, 50);
// console.log(r);

// // ------ Altro metodo
// let Rettangolo_ = class Rettangolo2 {
//     constructor(h, w) {
//         this.height = h;
//         this.width = w;
//     }
// }
// console.log(Rettangolo_.name);

