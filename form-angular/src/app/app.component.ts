import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  user: User;

  constructor(){
    this.user = new User
    this.user.name = "Foo Bar"
    this.user.designation = "Software"
    this.user.address = "1000 Street"
    this.user.phone = [
      '123-123',
      '956-956',
    ]
  }
}
