import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-address-card-component',
  templateUrl: './address-card-component.component.html',
  styleUrls: ['./address-card-component.component.css']
})
export class AddressCardComponentComponent implements OnInit {

  //@Input('user') user: User;
  isCollapsed : boolean = true
  
  constructor() { }

  
  toggleCollapse(){

    this.isCollapsed = !this.isCollapsed
  }
  
  ngOnInit() {
  }



}
