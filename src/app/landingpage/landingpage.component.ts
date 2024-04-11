import { Component, OnInit } from '@angular/core';
import { GetEmployeesService } from '../services/get-employees.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent {

  filterInput: string = ''; // Variable to store user input for filtering
  employeeExists: boolean = false;
  employees: Employee[] = [];

  constructor(private employeeService: GetEmployeesService) {}

  ngOnInit() {
    this.fetchEmployees();
  }

  fetchEmployees() {
    this.employeeService.fetchEmployees().subscribe(
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

    this.employeeService.filterEmployees(this.filterInput.trim()).subscribe(
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
