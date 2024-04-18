import { Component, OnInit } from '@angular/core';
import { GetEmployeesService } from '../services/get-employees.service';
import { Employee } from '../employee';
import { Router } from '@angular/router';
@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css'],
})
export class LandingpageComponent {
  filterInput: string = '';
  employeeExists: boolean = false;
  employees: Employee[] = [];
  employeeCount: number = 0;


  constructor(private employeeService: GetEmployeesService , private router: Router) {}

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
  addEmpLanding(){
    this.router.navigate(['//addNewEmployeePage']);
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
        alert("here")
        console.error('Error fetching employee details:', error);
        this.employeeExists = false;
      }
    );
  }
}
