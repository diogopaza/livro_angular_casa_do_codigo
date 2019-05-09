import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista-pessoa',
  templateUrl: './lista-pessoa.component.html',
  styleUrls: ['./lista-pessoa.component.css']
})
export class ListaPessoaComponent implements OnInit {
  
  constructor(private httpClient: HttpClient) { }

  public lista: any;

  ngOnInit() {
    //this.listar();
  }

  listar(){
    this.httpClient.get('http://localhost:9000/json').subscribe((res)=>this.lista = res, err=>{console.log("Deu merda")});
  }



}
export class pessoa {
  constructor(public id:Number, public nome:String, public email:String) { }
}