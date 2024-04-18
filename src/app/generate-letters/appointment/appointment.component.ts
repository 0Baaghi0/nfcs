import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetEmployeesService } from '../../services/get-employees.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  templateName!: string;
  fileToUpload: File | null = null;
  constructor(
    private route: ActivatedRoute, 
    private employeesService: GetEmployeesService,
    private http: HttpClient
  ) { }
  ngOnInit(): void {
  }
  handleFileInput(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files;
    if (files && files.length > 0) {
      this.fileToUpload = files.item(0);
    }
  }
  uploadTemplate() {
    if (!this.templateName || !this.fileToUpload) {
      alert('Please provide both template name and file.');
      return;
    }
    this.employeesService.uploadTemplate(this.templateName, this.fileToUpload)
      .subscribe(
        response => {
          console.log(response);
          alert('Template uploaded successfully.');
        },
        error => {
          console.error(error);
          alert('Error uploading template.');
        }
      );
  }
  displayPdf(templateName: string) {
    this.employeesService.displayPdf(templateName); 
  }


}













