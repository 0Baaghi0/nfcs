import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Employee {
  EMPLOYEE_NUMBER: number;
  FIRST_NAME: string;
  LAST_NAME: string;
  DATE_OF_JOINING: Date;
  LOCATION: string;
  EMAIL: string;
}

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css'],
})
export class ViewEmployeesComponent implements OnInit {
  filterInput: string = ''; // Variable to store user input for filtering
  employeeExists: boolean = false;
  employees: Employee[] = [];
  private baseUrl = 'http://127.0.0.1:5000/getemployee';
  baseUrlInitial = 'http://127.0.0.1:5000/getemployee/filterEmployees';
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchEmployees();
    console.log(this.baseUrlInitial);
  }

  fetchEmployees() {
    const url = this.baseUrl;

    this.http.get<Employee[]>(url).subscribe(
      (data: Employee[]) => {
        this.employees = data;
        this.employeeExists = this.employees.length > 0;
      },
      (error) => {
        console.error('Error fetching employee details:', error);
        this.employeeExists = false;
      }
    );
  }
  removeFilter() {
    this.filterInput = '';
    this.employeeExists = true;
    this.employees = [];
    this.fetchEmployees();
  }
  onSubmit() {
    if (!this.filterInput.trim()) {
      alert('Please enter a value');
      return;
    }

    const url = `${this.baseUrlInitial}/${this.filterInput.trim()}`;

    console.log('Final URL:', url);

    this.http.get<Employee[]>(url).subscribe(
      (data: Employee[]) => {
        this.employees = data;
        console.log(this.employees);
        this.employeeExists = this.employees.length > 0;
      },
      (error) => {
        console.error('Error fetching employee details:', error);
        this.employeeExists = false;
      }
    );
  }
}