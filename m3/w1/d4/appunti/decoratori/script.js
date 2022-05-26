"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(f) {
    console.log('...loading');
    console.log(f);
}
// un decoratore ha la seguente sintassi (con la chiocciola)
let Person = class Person {
    constructor() {
        this.name = 'Max';
        console.log('Creazione persona');
    }
};
Person = __decorate([
    Logger
], Person);
const pers = new Person();
console.log(pers);
// In questo caso quando si istanzia una classe (Person) viene richiamata anche la funzione (Logger). Quindi è utile se vogliamo applicare una funzione a tutte le classi in cui mettiamo @Logger. La funzione va importata sopra ogni classe in cui vogliamo importarla!
function AddMethod(target) {
    console.log(target);
    target.prototype.saluta = function () {
        console.log('ciao');
    };
}
let Test = class Test {
    saluta() {
    }
};
Test = __decorate([
    AddMethod
], Test);
let x = new Test();
console.log(x);
x.saluta(); // Test deve avere il metodo saluta()
//# sourceMappingURL=script.js.map