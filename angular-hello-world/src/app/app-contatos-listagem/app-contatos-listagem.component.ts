import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-contatos-listagem',
  templateUrl: './app-contatos-listagem.component.html',
  styleUrls: ['./app-contatos-listagem.component.css']
})
export class AppContatosListagemComponent implements OnInit {

  contatos = [
    {id:1, nome: 'Diogo', email:"diogopazacvel@gmail.com"},
    {id:2, nome:"barao", email:"barao.uol.com.br"},
    {id:4, nome:"Joao", email:"joao@terra.com.br"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
