import { Component, OnInit } from '@angular/core';
import { PessoaServiceService } from '../diretivas/pessoa-service.service';

@Component({
  selector: 'diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css'],
  providers:[PessoaServiceService]
})
export class DiretivasComponent implements OnInit {
 
  pessoas: string[]
  
  
  constructor( private service: PessoaServiceService) {
    this.pessoas = this.service.getPessoas()
    
   }

  ngOnInit() {
    console.log(this.pessoas)
  }

}
