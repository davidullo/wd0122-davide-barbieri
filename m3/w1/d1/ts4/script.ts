document.write('<table>')

for (let i = 0; i < 8; i++) {
    document.write(`<tr>`);
    for (let j = 0; j < 8; j++) {
        let pariDispari: number = (j + i) % 2; // con %2 gli diciamo di dividere per due e restituire il resto. Serve per capire se il numero è pari o dispari
        let color: string = pariDispari ? '#000' : '#fff';
        // document.write(`<td style="background-color: ${color}">${i} - ${j}</td>`)
        document.write(`<td style="background-color: ${color}"></td>`)
    }
    document.write(`</tr>`);
}

document.write('</table>')