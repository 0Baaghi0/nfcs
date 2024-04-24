import { Component, Input } from '@angular/core';
import { Employee } from '../../employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-card-display',
  templateUrl: './employee-card-display.component.html',
  styleUrls: ['./employee-card-display.component.css'],
})
export class EmployeeCardDisplayComponent {
  constructor(private router: Router) {}

  @Input() employees: Employee[] = [];
  @Input() employeeCount: number = 0;

  handleDeleteClick(employee: Employee) {
    console.log(employee);
    alert("Delete API will be called to delete");
  }

  handleEditClick(employee: Employee) {
    this.router.navigate(['./edit', { employee: JSON.stringify(employee) }]);
  }
}
