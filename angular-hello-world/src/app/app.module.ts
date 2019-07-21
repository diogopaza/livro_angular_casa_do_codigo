import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppContatosListagemComponent } from './app-contatos-listagem/app-contatos-listagem.component';
import {ContatoService} from './contato.service'

@NgModule({
  declarations: [
    AppComponent,
    AppContatosListagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ContatoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
