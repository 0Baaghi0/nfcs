import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})

export class GetEmployeesService {
  private baseUrl = 'http://127.0.0.1:5000/getallemployees';  
  private baseUrlInitial = 'http://127.0.0.1:5000/filterEmployees';
  private uploadUrl = 'http://127.0.0.1:5000/uploadTemplate';
  private convertRtfUrl = 'http://127.0.0.1:5000/convert_rtf';
  private updateEmployee = 'http://127.0.0.1:5000/editemployee';
  private fetchTemplateNamesUrl= 'http://127.0.0.1:5000/getTemplateById'

  constructor(private http: HttpClient) { }

  fetchEmployees(): Observable<Employee[]> {
    const try1 =  this.baseUrl;
    return this.http.get<Employee[]>(try1);
  }

  filterEmployees(filterInput: string): Observable<Employee[]> {
    const url = `${this.baseUrlInitial}/${filterInput.trim()}`;
    return this.http.get<Employee[]>(url);
  }

  updateID(selectedId: string){
    const url1 = `${this.updateEmployee}/${selectedId}`;
    return this.http.get<Employee[]>(url1);
  }
  uploadTemplate(templateName: string, fileToUpload: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('TEMPLATE_NAME', templateName);
    formData.append('TEMPLATE', fileToUpload);
    return this.http.post(this.uploadUrl, formData);
  }

  displayPdf(templateId: number): any {
    const apiUrl = `${this.convertRtfUrl}/${templateId}`;
    window.open(apiUrl);
  }

  fetchTemplateNames(){
    return this.http.get<any>(this.fetchTemplateNamesUrl);
  }
}
