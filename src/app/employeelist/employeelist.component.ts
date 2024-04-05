import { Component, Input } from '@angular/core';

interface Employee {
  EMPLOYEE_NUMBER: number;
  FIRST_NAME: string;
  LAST_NAME: string;
  DATE_OF_JOINING: Date;
  LOCATION: string;
  EMAIL: string;
}

@Component({
  selector: 'app-employee-list',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeeListComponent {
  @Input() employees: Employee[] = [];
employeeExists: any;

  constructor() { }
}
