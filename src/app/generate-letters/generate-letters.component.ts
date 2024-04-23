import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GetEmployeesService } from '../services/get-employees.service';

@Component({
  selector: 'app-generate-letters',
  templateUrl: './generate-letters.component.html',
  styleUrls: ['./generate-letters.component.css'],
})

export class GenerateLettersComponent {
  letterName: string = '';
  constructor(
    private router: Router,
    private employeesService: GetEmployeesService
  ) {}

  displayPdf(idCount: number) {
    this.employeesService.displayPdf(idCount).subscribe(
      (response: any) => {
        console.log(response);
        alert('Template uploaded successfully.');
      },
      (error: any) => {
        console.error(error);
        alert('Error uploading template. Here');
      }
    );
  }

  addNewTemplate() {
    this.router.navigate(['/addTemplate']);
  }

  
  appoinmentletter() {
    this.displayPdf(1);
  }
  offerletter() {
    this.displayPdf(2);
  }
  revisionletter() {
    this.displayPdf(3);
  }
  verificationletter() {
    this.displayPdf(4);
  }
}
