import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PessoaServiceService {

  nomePessoas : string[] = ['Joao','Beto',"tulio","luano"]

  constructor() { }

  getPessoas(): string[]{
    return this.nomePessoas
  }

  setPessoas(nome: string): void{
    this.nomePessoas.push(nome)
  } 



}
