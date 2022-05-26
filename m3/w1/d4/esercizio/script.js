"use strict";
class Capi {
    constructor(id, codProd, collezione, capo, modello, quantita, colore, prezzoIvaEsclusa, prezzoIvaInclusa, disponibile, saldo) {
        this.id = id;
        this.codProd = codProd;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoIvaEsclusa = prezzoIvaEsclusa;
        this.prezzoIvaInclusa = prezzoIvaInclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    getSaldoCapo() {
        let scontoCapo = ((this.prezzoIvaInclusa * this.saldo) / 100);
        return scontoCapo;
    }
    getAcquistoCapo() {
        let capoScontato = this.prezzoIvaInclusa - this.getSaldoCapo();
        return capoScontato;
    }
}
const APPURL = 'abbigliamento-new.json';
fetch(APPURL)
    .then(res => res.json())
    .then(res => {
    for (let capo of res) {
        capo = new Capi(capo.id, capo.codProd, capo.collezione, capo.capo, capo.modello, capo.quantita, capo.colore, capo.prezzoIvaEsclusa, capo.prezzoIvaInclusa, capo.disponibile, capo.saldo);
        console.log(`Capo: ${capo.capo}`);
        console.log(`Disponibilità:  ${capo.disponibile}`);
        console.log(`Prezzo capo:  ${capo.prezzoIvaInclusa} €`);
        console.log(`Sconto in percentuale ed euro: ${capo.saldo} % | ${capo.getSaldoCapo()} €`);
        console.log(`Prezzo del capo scontato: ${capo.getAcquistoCapo()} €`);
        console.log('---');
        console.log(capo);
    }
});
//# sourceMappingURL=script.js.map