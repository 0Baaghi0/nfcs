import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
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
 
  constructor(private formbuilder: FormBuilder, private router: Router,@Inject(DOCUMENT) private document:Document) {}
 
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
      //  console.log(this.login);
      console.log('incorrect user details');
    }
  }
 
  eyeEvent() {
    var passwordType=this.document.getElementById('password') as HTMLInputElement
    // alert('passwordtype'+passwordType.type)
    if(passwordType.type==="password"){
      passwordType.type="text"
    }
    else{
      passwordType.type="password"
    }
 
 
  }
  //
}