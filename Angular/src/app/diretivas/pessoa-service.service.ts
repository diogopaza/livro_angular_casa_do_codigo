import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PessoaServiceService {

  constructor() { }

  getPessoas(): string[]{
    return ['Joao','Beto',"tulio","luano"]
  }

}
