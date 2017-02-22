import { Component, OnInit } from '@angular/core';
import { Worker, Address } from '../model';

@Component({
  selector: 'app-workers-list',
  templateUrl: './workers-list.component.html',
  styleUrls: ['./workers-list.component.css']
})
export class WorkersListComponent {
  workers: Worker[] = [
    {
      id: 1,
      name: "Jennifer	Carlson",
      address: {
        city: "Tel-Aviv"
      },
      team: "Java",
      creditCard: 5510144579856319
    },
     {
      id: 2,
      name: "Lionel	Fleming",
      address: {
        city: "Rehovot"
      },
      team: "C#",
      creditCard: 4929230249508329
    },
     {
      id: 3,
      name: "Emanuel Sharp",
      address: {
        city: "Bat-Yam"
      },
      team: "Angular",
      creditCard: 6011839749553967
     },
     {
      id: 4,
      name: "Gregg	Klein",
      address: {
        city: "Lod"
      },
      team: "Java",
      creditCard: 375351723335943
     },
     {
      id: 5,
      name: "Courtney	Brooks",
      address: {
        city: "Tel-Aviv"
      },
      team: "Java",
      creditCard: 5331555473262725
     }
  ];
  


}
