import { Component, Input } from '@angular/core';
import { Employee } from '../../employee';

@Component({
  selector: 'app-employee-card-display',
  templateUrl: './employee-card-display.component.html',
  styleUrls: ['./employee-card-display.component.css']
})
export class EmployeeCardDisplayComponent {
  @Input() employees: Employee[] = [];
  @Input() employeeCount: number = 0;
}
