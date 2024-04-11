import { Component, EventEmitter, Output } from '@angular/core';
import { GetEmployeesService } from '../../services/get-employees.service';
import { Employee } from '../../employee';

@Component({
  selector: 'app-employee-filter',
  templateUrl: './employee-filter.component.html',
  styleUrls: ['./employee-filter.component.css']
})
export class EmployeeFilterComponent {
  @Output() employeeExistsChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output() filterApplied: EventEmitter<string> = new EventEmitter<string>();
  @Output() filterRemoved: EventEmitter<void> = new EventEmitter<void>();
  filterInput: string = '';
  employeeExists: boolean = false;

  constructor(private employeeService: GetEmployeesService) {}

  ngOnInit() {
    this.fetchEmployees();
  }

  fetchEmployees() {
    this.employeeService.fetchEmployees().subscribe(
      (data: Employee[]) => {
        this.employeeExists = data.length > 0;
        this.employeeExistsChange.emit(this.employeeExists);
      },
      (error) => {
        console.error('Error fetching employee details:', error);
        this.employeeExistsChange.emit(this.employeeExists);
      }
    );
  }

  onSubmit() {
    if (!this.filterInput.trim()) {
      alert('Please enter a value');
      return;
    }
    this.filterApplied.emit(this.filterInput.trim());
  }

  removeFilter() {
    this.filterInput = '';
    this.filterRemoved.emit();
  }
}
