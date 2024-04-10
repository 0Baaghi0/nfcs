import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css'],
})
export class OtpComponent {
  otppage: any = new FormGroup({});
  constructor(private formbuilder: FormBuilder, private router: Router) {}
  ngOnInit(): void {
    this.FormIntalization();
  }

  FormIntalization() {
    this.otppage = this.formbuilder.group({
      otp: ['', Validators.required],
    });
  }
  VERIFY() {
    // alert('reset')
    this.router.navigate(['/reset']);
  }
}
