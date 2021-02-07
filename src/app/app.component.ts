import { Component } from '@angular/core';
import { Employee, EmployeesService } from './employees.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  employees: Employee[] = [];
  title = 'my-third-dashboard';

  constructor(service: EmployeesService) {
    this.employees = service.getEmployees();
  }

  helloWorld(): void {
    alert('Hello world!');
  }
}
