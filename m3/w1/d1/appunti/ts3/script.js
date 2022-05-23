var mese = 13;
if (mese == 1) {
    console.log('gennaio');
}
else if (mese == 2) {
    console.log('febbraio');
}
else if (mese == 3) {
    console.log('marzo');
}
else {
    console.log('non esiste il mese numero ' + mese);
}
//con l'if viene loggata solo la prima condizione vera (nel caso un if e un else if siano entrambe vere)
// il caso qui sopra lo possiamo fare con switch
switch (mese) {
    case 1:
        console.log('gennaio');
        break;
    case 2:
        console.log('febbraio');
        break;
    case 3:
        console.log('marzo');
        break;
    case 4:
        console.log('aprile');
        break;
    case 5:
        console.log('maggio');
        break;
    default:
        console.log('non esiste il mese numero ' + mese);
}
// con il switch vengono loggati tutti i case veri
