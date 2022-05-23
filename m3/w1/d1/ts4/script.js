document.write('<table>');
for (var i = 0; i < 8; i++) {
    document.write("<tr>");
    for (var j = 0; j < 8; j++) {
        var pariDispari = (j + i) % 2; // con %2 gli diciamo di dividere per due e restituire il resto. Serve per capire se il numero è pari o dispari
        var color = pariDispari ? '#000' : '#fff';
        // document.write(`<td style="background-color: ${color}">${i} - ${j}</td>`)
        document.write("<td style=\"background-color: ".concat(color, "\"></td>"));
    }
    document.write("</tr>");
}
document.write('</table>');
