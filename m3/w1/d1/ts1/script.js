var nome = 'Mario'; //let nomevariabile:tipodato = valore
// nome = 5 //in questo caso mi direbbe che il numero non è assegnabile ad una variabile di tipo string
nome = 'Giovanna';
console.log(nome);
var dato = 'test';
dato = 5; // in questo caso non darà errori perché la variabile è di tipo "any". Non mettere any dappertutto, tranne se si è proprio di corsa
console.log(dato);
var ID = 125; // le costanti si mettono in maiuscolo per convenzione
console.log(ID);
// ID = 4 // Mi darà chiaramente un errore perché non posso riassegnare un valore ad una costante
