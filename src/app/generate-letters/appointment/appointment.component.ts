import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetEmployeesService } from '../../services/get-employees.service';



@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}