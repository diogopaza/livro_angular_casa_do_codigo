import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.css']
})
export class PaiComponent implements OnInit {

  familia: Object[]

  constructor() { 

    this.familia =[
      {
        nome:'Vitor',
        sobreNome:'Borges'
      },
      {
        nome:'Davilo',
        sobreNome:'Ruvo'
      },
      {
        nome:'Portes',
        sobreNome:'Vilas'
      },
      {
        nome:'Beto',
        sobreNome:'Leal'
      }



    ]

    

  } 

 
  ngOnInit() {
   // console.log(this.familia)

  }

  oi(){
    alert('oi')
  }


  reciverFeedback(respostaFilho){
    console.log('Foi emitido o evento e chegou no pai >>>>>>', respostaFilho)
    this.familia.push(respostaFilho)
}

  receberEvento(cliquei){
    console.log(cliquei)
  }

}
