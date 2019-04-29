import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-card-component',
  templateUrl: './address-card-component.component.html',
  styleUrls: ['./address-card-component.component.css']
})
export class AddressCardComponentComponent implements OnInit {

  user:{
    name : "diogo",
    age: 27
  }
  constructor() { }

  ngOnInit() {
  }

}
