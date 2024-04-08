import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})

export class ForgotPasswordComponent implements OnInit {
  
  ForgotPassword!: FormGroup;
  FormBuilder:any;
  // ForgotPassword:any =new FormGroup({});
  constructor(private formbuilder: FormBuilder, private router: Router) {
    this.ForgotPassword = this.FormBuilder.group({

    });
  }



ngOnInit(): void {
  this.FormIntialization();
}
FormIntialization(){
  this.ForgotPassword = this.formbuilder.group({
    EnterNewPassword: ['', Validators.required],
    ReEnterNewPassword: ['', Validators.required]
  });
}
SaveNewPassword(){
  this.router.navigate(['/forgotPassword'])

}

}