import { Component } from '@angular/core';
import { EmailValidator } from '@angular/forms';

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
      email: 'email@email.com';
    },
    {
      name: 'Sasha Grey';
      position: 'senior dv';
      email: 'email2@email.com';
    },
    {
      name: 'Anna Molly';
      position: 'junior dv';
      email: 'email3@email.com';
    }
  ];

  model: any = {};
  model2: any = {};
  msg: string = '';

  addEmployee(): void {
    this.employees.push(this.model);
    this.model = {};
    this.msg = 'Record is succesfully Delete';
  }

  deleteEmployee(i): void {}

  myValue;
  editEmployee(i): void {
    this.model2.name = this.employees[i].name;
    this.model2.position = this.employees[i].position;
    this.model2.email = this.employees[i].email;
    this.myValue = i;
  }
  updateEmployee(): void {
    console.log(this.model2);
  }
}
