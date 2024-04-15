
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

  constructor(private http: HttpClient) { }
  fetchEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl);
  }

  filterEmployees(filterInput: string): Observable<Employee[]> {
    const url = `${this.baseUrlInitial}/${filterInput.trim()}`;
    return this.http.get<Employee[]>(url);
  }

}
