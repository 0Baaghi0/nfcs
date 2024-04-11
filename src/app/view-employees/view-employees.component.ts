import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { GetEmployeesService } from '../services/get-employees.service';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css'],
})
export class ViewEmployeesComponent implements OnInit {
  employeeCount: number = 0;
  employees: Employee[] = [];
  filterInput: string = '';

  constructor(private getemployeeService: GetEmployeesService) {}

  ngOnInit() {
    this.fetchEmployees();
  }

  fetchEmployees() {
    this.getemployeeService.fetchEmployees().subscribe(
      (data: Employee[]) => {
        this.employees = data;
        this.employeeCount = this.employees.length;
      },
      (error) => {
        console.error('Error fetching employee details:', error);
      }
    );
  }

  applyFilter(filterInput: string) {
    this.getemployeeService.filterEmployees(filterInput).subscribe(
      (data: Employee[]) => {
        this.employees = data;
        this.employeeCount = this.employees.length;
      },
      (error) => {
        console.error('Error filtering employees:', error);
      }
    );
  }

  removeFilter() {
    this.filterInput = ''; // Clear filter input
    this.fetchEmployees(); // Fetch all employees again
  }
}
