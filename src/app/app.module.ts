import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpClientModule  } from '@angular/common/http';
// import {} 
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeesComponent } from './view-employees/view-employees.component';
// import { EmployeeListComponent } from './employeelist/employeelist.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { GenerateLettersComponent } from './generate-letters/generate-letters.component';
import { SetupComponent } from './setup/setup.component';
import { AddNewEmployeeComponent } from './add-new-employee/add-new-employee.component';
import { BulkAddEmployeeComponent } from './bulk-add-employee/bulk-add-employee.component';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FgPsPgComponent } from './fg-ps-pg/fg-ps-pg.component';
import { FileUploadModule } from 'ng2-file-upload';
import { EmployeeCardDisplayComponent } from './view-employees/employee-card-display/employee-card-display.component';
import { EmployeeFilterComponent } from './view-employees/employee-filter/employee-filter.component';
import { EmployeeListDisplayComponent } from './landingpage/employee-list-display/employee-list-display.component';


import { GetEmployeesService } from '../app/services/get-employees.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AddEmployeeComponent,
    ViewEmployeesComponent,
    LandingpageComponent,
    GenerateLettersComponent,
    SetupComponent,
    AddNewEmployeeComponent,
    BulkAddEmployeeComponent,
    ForgotPasswordComponent,
    FgPsPgComponent,
    EmployeeCardDisplayComponent,
    EmployeeFilterComponent,
    EmployeeListDisplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    FileUploadModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GetEmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
