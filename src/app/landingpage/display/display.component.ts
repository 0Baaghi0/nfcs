import { Component, Input } from '@angular/core';
import { Employee } from 'src/app/employee';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  @Input() employees: Employee[] = [];

  constructor() { }
}
