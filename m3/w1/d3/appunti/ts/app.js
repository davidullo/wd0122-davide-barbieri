var Test = /** @class */ (function () {
    // public id: number; // Il readonly lo posso mettere o qui oppure nel costruttore. Siccome l'ho messo nel costruttore, devo eliminare questa riga o me lo segnerà come duplicato
    function Test(name, id) {
        this.id = id;
        this.name = name;
        this.id = id;
    }
    Test.prototype.checkEmail = function (email) {
        if (this.email == email) {
            throw new Error('Email già esistente');
        }
        this.email = email;
    };
    return Test;
}());
var x = new Test('Giovanna', 1);
console.log(x.id, x.name);
function add(a) {
    return a;
}
var res = add('Ciao');
console.log(res);
var res2 = add(654);
console.log(res2);
// classe che ci permette di inserire ed eliminare un elemento da un array
var customArray = /** @class */ (function () {
    function customArray() {
        this.arr = [];
    }
    customArray.prototype.getItems = function () {
        return this.arr;
    };
    customArray.prototype.addItem = function (item) {
        this.arr.push(item);
    };
    customArray.prototype.removeItem = function (item) {
        var start = this.arr.indexOf(item);
        this.arr.splice(start, 1); //il primo è l'indice, il secondo parametro è quanti elementi eliminare, quindi 1 in questo caso
    };
    customArray.prototype.removeItem2 = function (item) {
        this.arr = this.arr.filter(function (i) { return i !== item; }); // mi restituisce tutti gli elementi, escluso quello diverso da item
    };
    return customArray;
}());
var array = new customArray();
array.addItem('ciao');
array.addItem('ciao2');
array.addItem('ciao3');
array.removeItem('ciao2'); //chiamiamo la funzione removeItem e gli diamo ciao2, verrà rimosso solo ciao2.
var arrayNum = new customArray();
console.log(array.getItems());
arrayNum.addItem(1);
arrayNum.addItem(2);
arrayNum.addItem(3);
arrayNum.removeItem(2);
console.log(arrayNum.getItems());
var k = {
    key: 'id',
    value: 0
};
var d = {
    key: 5,
    value: 0
};
// TUPLE 
var user = [1, 'Giovanna'];
var id = user[0], nome = user[1]; //non confondere con assegnamento in destrutturazione
console.log(id);
// matrici di TUPLE
var userArr = [
    [1, 'Mario'],
    [2, 'Luisa'],
    [3, 'Antonella'],
    user
];
userArr.push([4, 'Sara']);
console.log(userArr);
var arr = ['ciao'];
var arr2 = ['ciao', 'ciao2'];
//# sourceMappingURL=app.js.map