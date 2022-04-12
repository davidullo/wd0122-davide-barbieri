const user = {
    firstName: "Davide",
    lastName: "Barbieri",
    birthYear: "1994",
    job: "Student",
    driverLicense: true,
}
console.log(user);

var currentYear = 2022;
// Accediamo ad una proprietà dell'object con la sintassi "oggetto.proprietà"
let eta = currentYear - user.birthYear;
console.log(eta)

// DIFFERENZA TRA LET E VAR: La let all'interno delle graffe non vale al di fuori di queste (le graffe che chiudono rappresentano un block o blocco) perciò si dice che è block-scope (perchè esiste solo in locale), mentre la var vale anche fuori di queste perché ignora la block-scope. Quindi con let possono essere create delle variabili locali

// ------------

// Creiamo una funzione che calcola l'età prendendo i valori sopra.
// cY rappresenta "currentYear" mentre bY rappresenta "user.birthYear"

function calcAge(cY, bY) {
    return cY - bY;
}

// Parafrasi della riga sotto: "Andiamo nel documento, cerca l'elemento con id 'valore' e all'interno del suo contenitore assegna il valore dopo l'uguale."

// Da notare che essendo quella sopra una funzione, che per l'appunto ha come scopo quella di essere utilizzata più volte con valori diversi, i valori della funzione vengono assegnati solo successivamente, ossia nella riga qui sotto.

document.getElementById("valore").innerHTML = `${user.firstName} ha ` + '<strong>' + calcAge(currentYear, user.birthYear) + '</strong>' + ' Anni';

// Qui sotto abbiamo preso la proprietà "driverLicense" che è una boolean (true) e un if-else statement con un log che restituisce un risultato diverso a seconda del sul valore.
if (user.driverLicense) {
    console.log('Davide ha la patente')
} else {
    console.log('Davide non ha la patente')
}

