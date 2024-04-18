import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generate-letters',
  templateUrl: './generate-letters.component.html',
  styleUrls: ['./generate-letters.component.css'],
})
export class GenerateLettersComponent {
  letterName:string='';
  constructor(private router: Router) {}
  appoinmentletter() {
    this.letterName="appoinmentletter";
    this.router.navigate(['./appointment']);
  }
  revisionletter() {
    this.router.navigate(['./revision']);
  }
  conformationletter() {
    this.router.navigate(['./confirmation']);
  }
  relevingletter() {
    this.router.navigate(['./relieving']);
  }
  verificationletter() {
    this.router.navigate(['./verification']);
  }
}
