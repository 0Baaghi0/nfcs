import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../../employee';
import { ActivatedRoute } from '@angular/router';
import { GetEmployeesService } from '../../services/get-employees.service';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.css']
})
export class EditDetailsComponent implements OnInit {

  employee: Employee = {} as Employee;

  constructor(private route: ActivatedRoute, private employeeService: GetEmployeesService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['employee']) {
        this.employee = JSON.parse(params['employee']) as Employee;
      }
    });
  }

  submitForm() {
    this.employeeService.updateID(this.employee.EMPLOYEE_NO).subscribe(
      (response) => {
        alert("Employee details updated successfully");
      },
      (error)=> {
        alert("Error updating employee details");
        console.log(error);
      }
    );
  }
}
