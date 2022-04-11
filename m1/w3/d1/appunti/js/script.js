// Il = è un operatore di assegnamento, cioè il 5 viene assegnato al contenitore a sinistra (ad "x")

// var x = 5;

// Nei nomi delle variabili non ci può essere uno spazio, ed è anche sconsigliato mettere accenti o robe strane. Scriverla possibilmente in camelCase.

// è un linguaggio debolmente tipizzato, cioè se in una variabile mettiamo ad es. un numero non c'è bisogno di specificarli che gli metteremo un numero.

/*
Tipi di dato:
number
string
boolean
object => liste di dati e funzioni separate per nome
array => lista di valori identificati per numero
*/

var numero = 5; // Dato di tipo numero
var testo = '5 blablabla'; // Dato di tipo testuale (stringa)
var booleano = true;
var oggetto = {
    nome: 'Mario',
    cognome: 'Rossi',
    eta: 30
};

var array = [
    1,
    2,
    3,
    4,
    'ciao',
];


// concatenamento e operazioni tra variabili

var a = 2;
var b = 2;
var c = a + b; // valore 4

var saluto = 'Ciao';
var domanda = 'come stai?'

document.write(saluto + ' ' + domanda)

// andremo a preferire document.write anziche alert perché il secondo è troppo bloccante (noioso). Il "write" è un metodo. Il "." sta per chiamare la proprietà o funzione del document (che è un oggetto già definito da JS), quindi è come se gli dicessimo "All'interno dell'oggetto document, cerca il metodo write. Il write va a scrivere qualcosa nel documento"

document.write('<ul>');
document.write('<li>' + oggetto.nome + '</li>');
document.write('<li>' + oggetto.cognome + '</li>');
document.write('<li>' + oggetto.eta + '</li>');
document.write('</ul>');

// funzioni
// Le funzioni sono un insieme di istruzioni, che non vengono eseguite all'istante, ma decideremo noi quando dovranno essere eseguite. La parentesi tonda che apre e chiude significa "esegui". Alcune funzioni ESEGUONO ed alcune funzioni RESTITUISCONO UN VALORE/DATO.

function somma() {
    document.write(2 + 6);
}

function ottieniSomma() {
    return 2 + 6;
}

var risultato = ottieniSomma();
console.log(risultato);
console.log(oggetto)

// ricordarsi di eliminare i console.log quando si va in sviluppo e si lancia la web app in produzione

// Assegnamento valori

var nome = 'Mario';
console.log(nome);

// Riassegnamo un valore alla variabile "nome". Non c'è bisogno di scrivere "var" perché la variabile già esiste.

nome = 'Giovanni';
console.log(nome);

// Lavorare con oggetti del DOM

// Con js possiamo selezionare un elemento

var div1 = document.getElementById('elem'); // Quindi sulla riga sopra abbiamo detto "crea una variabile div1 e al suo interno mettici ciò che nell'oggetto document ha l'id 'elem'"

console.log(div1);

console.log(div1.innerHTML);

div1.innerHTML = '<b>prova</b>';

// div1.style.backgroundColor = 'red';

div1.classList.add('giallo');

// Le procedure qui sopra valgono per tutte le proprietà di HTML

var blocchi = document.getElementsByClassName('blocco');
console.log(blocchi);

blocchi[0].style.backgroundColor = 'green';

var b = document.getElementsByTagName('b');

var tutto = document.querySelectorAll('#elem, .blocco, b');