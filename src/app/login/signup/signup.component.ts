import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  title = 'RegisterForm';
  RegisterForm: any = new FormGroup({});
  constructor(private FormBuilder1: FormBuilder, private router: Router) {}
  ngOnInit(): void {
    this.FormIntialization();
  }
  FormIntialization() {
    this.RegisterForm = this.FormBuilder1.group({
      USERID: ['', Validators.required],
      USERNAME: ['', Validators.required],
      PASSWORD: ['', Validators.required],
      FIRSTNAME: ['', Validators.required],
      MIDDLENAME: ['', Validators.required],
      LASTNAME: ['', Validators.required],
      EMAIL: ['', Validators.required],
      MOBILENUMBER: ['', Validators.required],
      USERTYPE: ['', Validators.required],
    });
  }

  onSubmit(){
    this.router.navigate(['./vsup']);
  }
}
