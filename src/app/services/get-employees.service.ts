import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class GetEmployeesService {
  private baseUrl = 'http://127.0.0.1:5000/getemployees';
  private baseUrlInitial = 'http://127.0.0.1:5000/getemployee/filterEmployees';
  private uploadUrl = 'http://127.0.0.1:5000/uploadTemplate';
  private convertRtfUrl = 'http://127.0.0.1:5000/convert_rtf';
  private updateEmployee = 'http://127.0.0.1:5000/updateid';
  private fetchTemplateNamesUrl= 'http://127.0.0.1:5000/getTemplateById'

  constructor(private http: HttpClient) { }

  fetchEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl);
  }

  filterEmployees(filterInput: string): Observable<Employee[]> {
    const url = `${this.baseUrlInitial}/${filterInput.trim()}`;
    return this.http.get<Employee[]>(url);
  }

  updateID(selectedId: number){
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
