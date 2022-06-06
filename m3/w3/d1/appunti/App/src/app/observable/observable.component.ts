import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators'; // gli operatori da usare nel pipe vanno importati da rxjs/operators

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss'],
})
export class ObservableComponent implements OnInit, OnDestroy {
  constructor() {}

  sub!: Subscription;
  sub2!: Subscription;

  ngOnInit(): void {
    //this.sub = interval(1000).subscribe((numero) => console.log(numero)); // fa partire un timer con intervallo di 1000ms in log nella pagina observable
    const customInterval = new Observable((observerPippo) => {
      let count = 0;
      setInterval(() => {
        observerPippo.next(count); // comunica alla callback del subscribe il valore inserito tra parentesi. Il parametro count è ciò che va a finire nel log, se metto "ciao" verrà printato ciao ogni secondo.
        if (count > 30) {
          observerPippo.error('Numero troppo elevato'); // scatena un errore bloccante, oppure invia il dato alla calback di errore
        }
        if (count == 20) {
          observerPippo.complete(); // completa l'observable, in modo positivo
        }
        count++;
      }, 1000);
    }); //definiamo una callback all'interno di observable

    // map serve per modificare ogni elemento di un array
    this.sub2 = customInterval
      .pipe(
        filter((numero: any) => numero > 10),
        map((numero: any) => `Eseguito ${numero} volte`)
      )
      .subscribe(
        (numero) => console.log(numero),
        (error) => {
          throw new Error(error);
        },
        () => console.log('completo')
      ); //customInterval è un observale, quindi si fa praticamente sempre il subscribe
  }

  ngOnDestroy(): void {
    // this.sub.unsubscribe();
    this.sub2.unsubscribe();
  }
}
