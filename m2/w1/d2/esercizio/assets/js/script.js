function spendiBudget() {
    let budget = 2500;
    let acquisto = 0;
    while (budget > 0) {
        let spesa = Math.floor(Math.random() * 200);
        if (spesa <= budget) {
            acquisto += 1;
            budget -= spesa;
            document.getElementById('output-spesa').innerHTML += '<p> Hai fatto un acquisto di ' + spesa + '€' + '<br>Nuovo budget: ' + budget + '€</p><br>';
        }

        // if (budget < 1250 && budget > 1180) {
        //     document.getElementById('output-spesa').innerHTML += '<p> Hai fatto un acquisto di ' + spesa + '€' + '<br>Nuovo budget: ' + budget + '€</p><br>';
        //     document.getElementById('output-spesa').innerHTML = '⚠️ Sei arrivato a metà del budget! ⚠️<br>';
        // }

        if (budget < 100) {
            document.getElementById('esaurito').innerHTML = 'Hai meno di 100€, dovresti smetterla di spendere i tuoi soldi.';
            break;
        }
    }

    document.getElementById('budget-titolo').innerHTML += '<p>Hai acquistato: ' + acquisto + ' oggetti </p>';

}