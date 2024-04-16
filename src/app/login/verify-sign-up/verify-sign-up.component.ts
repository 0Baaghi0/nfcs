import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-sign-up',
  templateUrl: './verify-sign-up.component.html',
  styleUrls: ['./verify-sign-up.component.css']
})
export class VerifySignUpComponent {
  constructor(private router: Router) { }
  verify1() {
    this.router.navigate(['./cnfrmsup']);
  }
}
