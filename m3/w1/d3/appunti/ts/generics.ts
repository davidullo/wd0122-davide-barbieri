function add<G>(a: G): G {
    return a;
}

let res = add<string>('Ciao')
console.log(res);

let res2 = add<number>(654)
console.log(res2);

// classe che ci permette di inserire ed eliminare un elemento da un array
class customArray<T>{

    private arr: T[] = [];

    getItems(): T[] {
        return this.arr;
    }

    addItem(item: T) {
        this.arr.push(item);
    }

    removeItem(item: T) {
        let start = this.arr.indexOf(item);
        this.arr.splice(start, 1); //il primo è l'indice, il secondo parametro è quanti elementi eliminare, quindi 1 in questo caso
    }
    removeItem2(item: T) {
        this.arr = this.arr.filter((i: T) => i !== item); // mi restituisce tutti gli elementi, escluso quello diverso da item
    }
}

let array = new customArray<string>();

array.addItem('ciao');
array.addItem('ciao2');
array.addItem('ciao3');
array.removeItem('ciao2'); //chiamiamo la funzione removeItem e gli diamo ciao2, verrà rimosso solo ciao2.

let arrayNum = new customArray<number>()

console.log(array.getItems());

arrayNum.addItem(1);
arrayNum.addItem(2);
arrayNum.addItem(3);
arrayNum.removeItem(2);

console.log(arrayNum.getItems());

// generics multipli

interface KeyValue<T, U> {
    key: T;
    value: U;
}

let k: KeyValue<string, number> = {
    key: 'id',
    value: 0
}

let d: KeyValue<number, number> = {
    key: 5,
    value: 0
}

// TUPLE 
let user: [number, string] = [1, 'Giovanna']
let [id, nome] = user //non confondere con assegnamento in destrutturazione
console.log(id);

// matrici di TUPLE

let userArr: [number, string][] = [
    [1, 'Mario'],
    [2, 'Luisa'],
    [3, 'Antonella'],
    user
]

userArr.push([4, 'Sara'])

console.log(userArr);

let arr: [string] = ['ciao'];
let arr2: string[] = ['ciao', 'ciao2'];

