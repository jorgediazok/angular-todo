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
    this.msg = 'Record is succesfully added';
  }

  deleteEmployee(i): void {
    let answer = confirm('are you sure you want to delete this element?');
    if (answer) {
      this.employees.splice(i, 1);
      this.msg = 'Record is succesfully deleted';
    }
  }

  myValue;
  editEmployee(i): void {
    this.model2.name = this.employees[i].name;
    this.model2.position = this.employees[i].position;
    this.model2.email = this.employees[i].email;
    this.myValue = i;
  }
  updateEmployee(): void {
    let i = this.myValue;
    for (let j = 0; j < this.employees.length; j++) {
      if (i === j) {
        this.employees[i] = this.model2;
        this.model2 = {};
        this.msg = 'Record is succesfully updated';
      }
    }
  }
}
