import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetEmployeesService } from '../../services/get-employees.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
})
export class AppointmentComponent implements OnInit {
  @Input() idCount: number = 0;
  templateName!: string;
  templateId!: number;
  fileToUpload: File | null = null;

  
  constructor(
    private route: ActivatedRoute,
    private employeesService: GetEmployeesService,
    private http: HttpClient,
    private router: Router
  ) {}
  ngOnInit(): void {
    
  }
  handleFileInput(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files;
    if (files && files.length > 0) {
      this.fileToUpload = files.item(0);
    }
  }
  
  displayPdf(idCount:number) {
    this.employeesService.displayPdf(idCount).subscribe(
      (response:any) => {
        console.log(response);
        alert('Template uploaded successfully.');
      },
      (error:any) => {
        console.error(error);
        alert('Error uploading template. Here');
      }
    );
    
  }

  addNewTemplate() {
    this.router.navigate(['/addTemplate']);
    // this.idCount++
  }
  

  onIdCountUpdated(updatedIdCount: number) {
    this.idCount = updatedIdCount;
  }
  
}
