import { Component, ElementRef, OnInit } from '@angular/core';
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
  names: string[] = [];
  templateName!: string;
  templateName1!: string;
  templateName2!: string;
  fileToUpload: File | null = null;
  fileContent: string | null = null;

  constructor(
    private employeesService: GetEmployeesService,
    private http: HttpClient,
    private router: Router,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.getNames().subscribe(names => {
      this.names = names;
      console.log(this.names);
    });
  }
  getNames(): Observable<string[]> {
    return this.http.get<string[]>('http://127.0.0.1:5000/getTemplateNames');
    console.log(this.names);
  }
  handleFileInput(event: any) {
    this.fileToUpload = event.target.files[0];
    if (this.fileToUpload) {
      this.previewFile(this.fileToUpload);
    }
  }

  previewFile(file: File) {
    const reader = new FileReader();
    reader.readAsText(file, 'UTF-8');
    reader.onload = () => {
      this.fileContent = reader.result as string;
    };
  }

  uploadTemplate() {
    this.templateName=this.templateName1+this.templateName2
    if (!this.templateName || !this.fileToUpload) {
      alert('Please provide both template name and file.');
      return;
    }

    this.employeesService.uploadTemplate(this.templateName, this.fileToUpload).subscribe(
      (response: any) => {
        console.log(response);
        alert('Template uploaded successfully.');
      },
      (error) => {
        console.error(error);
        alert('Error uploading template.');
      }
    );
  }
}
