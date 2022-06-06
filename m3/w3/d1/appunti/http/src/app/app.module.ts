import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule], // HttpClientModule mi serve per fare chiamate ajax. Ricorda di importarlo correttamente sopra
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
