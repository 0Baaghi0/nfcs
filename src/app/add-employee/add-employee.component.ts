import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      dateOfJoining: ['', Validators.required],
      location: ['', Validators.required],
      workerType: ['candidate', Validators.required],
      effectiveStartDate: ['', Validators.required],
      effectiveEndDate: [''],
      email: ['', [Validators.required, Validators.email]],
      userid1: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      const employeeData = {
        // EMP_ID: this.employeeForm.value['employeeNumber'],
        EMP_ID: 1213,
        EMP_NO: this.employeeForm.value['employeeNumber'],
        FIRST_NAME: this.employeeForm.value['firstName'],
        MIDDLE_NAME: this.employeeForm.value['middleName'],
        LAST_NAME: this.employeeForm.value['lastName'],
        EMAIL_ADDRESS: this.employeeForm.value['email'],
        DATE_OF_JOINING: this.employeeForm.value['dateOfJoining'],
        DATE_OF_BIRTH: this.employeeForm.value['dateOfBirth'],
        WORK_LOCATION: this.employeeForm.value['location'],
        WORKER_TYPE: this.employeeForm.value['workerType'],
        USER_ID: this.employeeForm.value['userid1'],
        // EFFECTIVE_START_DATE: this.employeeForm.value['effectiveStartDate'],
        // EFFECTIVE_END_DATE: this.employeeForm.value['effectiveEndDate'],
        
      };

      this.http.post<any>(`http://127.0.0.1:5000/registeremployee`, employeeData).subscribe(
        
        (response) => {
          console.log("clicked2")
          alert('Employee saved successfully');
          console.log('Employee saved successfully', response);
          this.employeeForm.reset();
        },
        (error) => {
          console.log("clicked3")
          alert('Data not sent');
          console.error('Error saving employee', error);
        }
      );
    }
    else
    console.log("clicked error")
  }
}
