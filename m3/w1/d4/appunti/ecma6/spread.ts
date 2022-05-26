let arrrrr: number[] = [1, 2, 3]
let arrrrr2: number[] = [4, 5, 6]

let spread: number[] = [...arrrrr, ...arrrrr2]
console.log(spread);

function somma(...numeri: number[]) { // i 3 puntini vuol dire che non ha un solo parametro, ma n parametri che verranno inseriti nell'array numeri
    // console.log(numeri);
    // let totale = 0
    // numeri.forEach((n: number) => totale += n)
    let totale: number = numeri.reduce((c: number, n: number) => c + n)
    return totale;
}

console.log(somma(2, 3, 6, 10));
