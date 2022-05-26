function Logger(f: Function) {
    console.log('...loading');
    console.log(f);
}
// un decoratore ha la seguente sintassi (con la chiocciola)
@Logger
class Person {
    name: string = 'Max';
    constructor() {
        console.log('Creazione persona');
    }
}

const pers = new Person();
console.log(pers);

// In questo caso quando si istanzia una classe (Person) viene richiamata anche la funzione (Logger). Quindi è utile se vogliamo applicare una funzione a tutte le classi in cui mettiamo @Logger. La funzione va importata sopra ogni classe in cui vogliamo importarla!

function AddMethod(target: Function) {
    console.log(target);
    target.prototype.saluta = function () { //prototype permette di aggiungere ad una classe un metodo o una proprietà
        console.log('ciao');

    }

}
@AddMethod
class Test {
    saluta() {

    }
}

let x = new Test();
console.log(x);
x.saluta(); // Test deve avere il metodo saluta()
