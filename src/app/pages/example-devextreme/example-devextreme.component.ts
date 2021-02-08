import { Component, OnInit } from '@angular/core';
import { Employee, EmployeesService } from '../../employees.service';

@Component({
  selector: 'app-example-devextreme',
  templateUrl: './example-devextreme.component.html',
  styleUrls: ['./example-devextreme.component.scss']
})
export class ExampleDevextremeComponent implements OnInit {

  employees: Employee[] = [];

  constructor(service: EmployeesService) {
    this.employees = service.getEmployees();
  }

  ngOnInit(): void {
  }

  helloWorld(): void {
    const message = `Я кнопка из набора devextreme компонентов. Моё имя <dx-button>.\n
Кроме меня существует много других компонентов, которые можно найти сайте\n
https://js.devexpress.com/DevExtreme/Guide/UI_Components/`;
    alert(message);
  }
}
