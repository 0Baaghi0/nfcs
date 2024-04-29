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
  latestEmpNo: string | undefined;

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

    // Load values into the latestEmpNo variable on page load
    this.loadLatestEmpNo();
  }

  loadLatestEmpNo() {
    this.http.get('http://127.0.0.1:5000/latests_emp_no', { responseType: 'text' }).subscribe(
      (response: string) => {
        this.latestEmpNo = response;
      },
      (error) => {
        console.error('Error fetching latest employee number', error);
      }
    );
  }
  

  onSubmit() {
    if (this.employeeForm.valid) {
      const employeeData = {
        // EMP_ID: 1213,
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
      };

      this.http.post<any>('http://127.0.0.1:5000/registeremployee', employeeData).subscribe(
        (response) => {
          console.log('Employee saved successfully', response);
          alert('Employee saved successfully');
          this.employeeForm.reset();
        },
        (error) => {
          console.error('Error saving employee', error);
          alert('Data not sent');
        }
      );
    } else {
      console.log("Form is invalid");
    }
  }
}
