import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent{
  name: string = 'Eliabe';
  age: number = 16;
  job = "Programador";
  hobbies = ['Xadrez', 'Books', 'keyboard']
  car = {
    name: 'Uno',
    year: 2013,
  }
  constructor() {}

   
}
