import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  title = 'FgpwPage';
  FgpwPage!: FormGroup; // Definite assignment assertion modifier added

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.FormInitialization();
  }

  FormInitialization() {
    this.FgpwPage = this.formBuilder.group({
      USERNAME: ['', Validators.required]
    });
  }

  SENDOTP() {
    // Logic to send OTP
    this.router.navigate(['/OTPPage']);
  }
}
