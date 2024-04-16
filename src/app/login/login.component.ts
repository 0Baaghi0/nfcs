import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  title = 'LoginFormofNFCS';
  submitted = false;
  loginForm: any = new FormGroup({});

  constructor(private formbuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.FormIntalization();
  }

  FormIntalization() {
    this.loginForm = this.formbuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    console.log(this.loginForm.value.userName);
    if (
      this.loginForm.value.userName === 'Sowmya' &&
      this.loginForm.value.password === '123'
    ) {
      this.submitted = true;
      console.log(this.submitted);
      this.router.navigate(['landing']);
    } else {
      this.submitted = true;
      console.log('incorrect user details');
    }
  }
}
