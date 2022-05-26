function combine(input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = Number(input1) + Number(input2);
    }
    else {
        result = input1.toString() + String(input2);
    }
    return result;
}
var resNum = combine(1, 1);
console.log(resNum);
var resStr = combine('1', 1);
console.log(resStr);
var e1 = {
    name: 'Max',
    names: 12,
    privileges: ['create-server'],
    startDate: new Date()
};
// promemoria per l'utilizzo di interfacce come tipo di dato
// interface ITest {
//     nome: string;
//     cognome: string
// }
// let persona: ITest = {
//     nome: 'Mario',
//     cognome: 'Rossi'
// }
