import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Carlos';
  
  userData = {
    email: 'carlosribeiro@gmail.com',
    role: 'Admin',
  };

  title = 'Twitter';
}
