let arr: number[] = [10, 20, 30]; //abbiamo creato una variabile di tipo array numerico (array che può contenere solo numeri)

let moltiplicazione: number[] = arr.map((n: number) => n * 2); // map cicla ogni elemento dell'array e creandone uno nuovo esegue una funzione (in questo caso)

console.log(arr, moltiplicazione);

let strArr: string[] = ['ciao', 'ciao2', 'ciao3'];
let strArrBold: string[] = strArr.map((s: string) => `<b>${s.toUpperCase()}</b>`)
console.log(strArr, strArrBold);
