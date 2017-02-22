import { Component} from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <div>Name: {{name}}</div>
    <div>from {{address.city}} </div>
    <div>credit: {{creditCard}}</div>
    <div a->Teams</div>
    <select>
      <option *ngFor="let team of teams">{{team}}</option>
    </select>
  `, 
  
})
export class AppComponent {
  teams = ["Java", "C#", "Python"];
  id= 1;
  name= "Jennifer	Carlson";
  address= {
    city: "Tel-Aviv"
  };
  team= "Java";
  creditCard= 5510144579856319  
}
