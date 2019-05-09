import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertaService {

  constructor() { }

  public alerta(){
    alert("Livro Angular 2")
  }
}
