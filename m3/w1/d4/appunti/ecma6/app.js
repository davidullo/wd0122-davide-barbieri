"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// si possono destrutturare anche gli oggetti
let lista = [1, 2, 3, 4];
let [n1, , , n4] = lista; // gli dico che voglio destrutturare lista, quindi n1 crea una variabile con dentro il primo elemento dell'array, n4 il quarto
console.log(n1, n4);
// destrutturazione oggetti
let oggetto = {
    n: 'Marco',
    nazione: 'Italia'
};
let { n, nazione } = oggetto;
console.log(n, nazione);
let bottone = document.querySelector('#myform button');
bottone === null || bottone === void 0 ? void 0 : bottone.addEventListener('click', function (e) {
    e.preventDefault(); //blocco l'esecuzione di default del form (perchè button si trova dentro il form)
    let fields = document.querySelectorAll('#myform input'); // con il generic gli diciamo che deve restituirci un HTMLInputElement
    let values = Array.from(fields).map((f) => f.value); // fields non è proprio un'array (ma una nodelist), quindi aggiungiamo "Array.from(fields)" per trasformarlo in array. Array è una classe predefinita, e from è un metodo predefinito di Array.
    let [name, lastname, password] = values; // il queryselector prende i dati in ordine dall'altro verso il basso, e non perché i nomi sono uguali all' id dell' input.
    let valid = true; //facciamo una variabile di controllo booleana impostata su true
    if (password.length < 8) { // il ? si mette perché fields (quindi anche password) è HTMLInputElement che potrebbe essere null se la lunghezza del value di password è minore di 8...
        valid = false;
    }
    for (let field of fields) { // ciclo tutti i campi e dico se anche uno solo dei campi è vuoto, valid sarà false
        if (!field.value) {
            valid = false;
        }
    }
    if (valid) {
        console.log('valido');
    }
});
function call() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = 'https://628f5a240e69410599dade0b.mockapi.io/api/v1/users';
        let response = yield fetch(url); //aspetta che l'elaborazione di destra sia finita
        /*
    
        let all = Promise.All([
            fetch(urlUtenti).then(res=>res.json()),
            fetch(urlIndirizzi).then(res=>res.json()),
            fetch(urlNumeritelefono).then(res=>res.json()),
        ])
        
        */
        let json = yield response.json();
        console.log(json);
        let { avatar, name } = json[0];
        console.log(avatar, name);
    });
}
call();
// concatenamento
let nome = 'Mario';
let saluto = 'ciao ' + nome + ', come stai?';
console.log(saluto);
// template literal (interpolazione di stringhe)
let saluto2 = `ciao ${nome}, come stai?`;
console.log(saluto2);
let arr = [10, 20, 30]; //abbiamo creato una variabile di tipo array numerico (array che può contenere solo numeri)
let moltiplicazione = arr.map((n) => n * 2); // map cicla ogni elemento dell'array e creandone uno nuovo esegue una funzione (in questo caso)
console.log(arr, moltiplicazione);
let strArr = ['ciao', 'ciao2', 'ciao3'];
let strArrBold = strArr.map((s) => `<b>${s.toUpperCase()}</b>`);
console.log(strArr, strArrBold);
let numbers = [10, 20, 30, 40];
let foundNumbers = numbers.filter((n) => n > 10);
console.log(foundNumbers);
let foundNumber = numbers.find((n) => n == 10);
console.log(foundNumber);
let arrrrr = [1, 2, 3];
let arrrrr2 = [4, 5, 6];
let spread = [...arrrrr, ...arrrrr2];
console.log(spread);
function somma(...numeri) {
    // console.log(numeri);
    // let totale = 0
    // numeri.forEach((n: number) => totale += n)
    let totale = numeri.reduce((c, n) => c + n);
    return totale;
}
console.log(somma(2, 3, 6, 10));
//# sourceMappingURL=app.js.map