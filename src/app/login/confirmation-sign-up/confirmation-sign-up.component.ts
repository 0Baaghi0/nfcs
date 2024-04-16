import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation-sign-up',
  templateUrl: './confirmation-sign-up.component.html',
  styleUrls: ['./confirmation-sign-up.component.css'],
})
export class ConfirmationSignUpComponent {
  constructor(private router: Router) {}

  BackToLoginPage() {
    this.router.navigate(['/']);
  }
}
