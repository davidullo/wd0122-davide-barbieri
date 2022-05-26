// si possono destrutturare anche gli oggetti
let lista: any[] = [1, 2, 3, 4];

let [n1, , , n4] = lista; // gli dico che voglio destrutturare lista, quindi n1 crea una variabile con dentro il primo elemento dell'array, n4 il quarto

console.log(n1, n4);

// destrutturazione oggetti

let oggetto = {
    n: 'Marco',
    nazione: 'Italia'
}

let { n, nazione } = oggetto;
console.log(n, nazione);
