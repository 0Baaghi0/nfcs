import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetEmployeesService } from '../../services/get-employees.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-template',
  templateUrl: './add-template.component.html',
  styleUrls: ['./add-template.component.css'],
})
export class AddTemplateComponent implements OnInit {
  @Input() idCount: number = 0;
  @Output() idCountUpdated: EventEmitter<number> = new EventEmitter<number>();
  templateName!: string;
  templateId!: number;
  fileToUpload: File | null = null;
  constructor(
    private route: ActivatedRoute,
    private employeesService: GetEmployeesService,
    private http: HttpClient,
    private router: Router
  ) {}
  ngOnInit(): void {}
  handleFileInput(event: any) {
    this.fileToUpload = event.target.files[0];
  }

  uploadTemplate() {
    if (!this.templateName || !this.fileToUpload) {
      alert('Please provide both template name and file.');
      return;
    }
    this.employeesService.uploadTemplate(this.templateName, this.fileToUpload).subscribe(
        (response) => {
          console.log(response);
          alert('Template uploaded successfully.');

          this.idCountUpdated.emit(this.idCount);
        },
        (error) => {
          console.error(error);
          // alert('Error uploading template. Here');
        }
      );
  }
}
