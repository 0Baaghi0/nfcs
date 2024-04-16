import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-successful',
  templateUrl: './reset-successful.component.html',
  styleUrls: ['./reset-successful.component.css']
})
export class ResetSuccessfulComponent {
  constructor(private router: Router) { }
  BackToLoginPage() {
    this.router.navigate(['/']);
  }
}
