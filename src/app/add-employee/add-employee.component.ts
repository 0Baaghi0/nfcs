import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

// interface Employee {
//   employeeNumber: number;
//   firstName: string;
//   lastName: string;
//   dateOfJoining: Date;
//   location: string;
//   email: string;
// }

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})


export class AddEmployeeComponent implements OnInit {
  employeeForm!: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit() {
    this.employeeForm = this.fb.group({
      employeeNumber: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfJoining: ['', Validators.required],
      location: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {

    if (this.employeeForm.valid) {

      const employeeData = {
        EMPLOYEE_NUMBER:this.employeeForm.value['employeeNumber'],
        FIRST_NAME:this.employeeForm.value['firstName'],
        LAST_NAME:this.employeeForm.value['lastName'],
        DATE_OF_JOINING:this.employeeForm.value['dateOfJoining'],
        LOCATION:this.employeeForm.value['location'],
        EMAIL:this.employeeForm.value['email'],
      }

      this.http.post<any>(`http://127.0.0.1:5000/adddata`, employeeData).subscribe(
        (response) => {
          alert("Employee saved successfully");
          console.log('Employee saved successfully', response);
          this.employeeForm.reset();
        },
        (error) => {
          alert("Data not sent");
          console.error('Error saving employee', error);
          // Handle error (e.g., display error message)
        }
      );
    }
  }
}
