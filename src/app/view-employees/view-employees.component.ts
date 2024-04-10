// view-employees.component.ts

import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { GetEmployeesService } from '../services/get-employees.service';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css'],
})
export class ViewEmployeesComponent implements OnInit {
  filterInput: string = '';
  employeeExists: boolean = false;
  employees: Employee[] = [];


  constructor(public getemployeeService: GetEmployeesService) {}

  ngOnInit() {
    this.fetchEmployees();
  }

  fetchEmployees() {
    this.getemployeeService.fetchEmployees().subscribe(
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

    this.getemployeeService.filterEmployees(this.filterInput).subscribe(
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
}
