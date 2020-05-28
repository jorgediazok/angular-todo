import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Angular Crud';
  employees: [
    {
      name: 'Mia Malkova';
      position: 'manager';
    },
    {
      name: 'Sasha Grey';
      position: 'senior dv';
    },
    {
      name: 'Anna Molly';
      position: 'junior dv';
    }
  ];

  model: any = {};

  addEmployee(): void {}
  deleteEmployee(): void {}
  editEmployee(): void {}
  updateEmployee(): void {}
}
