import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpClientModule  } from '@angular/common/http';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeesComponent } from './view-employees/view-employees.component';
import { EmployeeListComponent } from './employeelist/employeelist.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { GenerateLettersComponent } from './generate-letters/generate-letters.component';
import { SetupComponent } from './setup/setup.component';
import { AddNewEmployeeComponent } from './add-new-employee/add-new-employee.component';
import { BulkAddEmployeeComponent } from './bulk-add-employee/bulk-add-employee.component';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FgPsPgComponent } from './fg-ps-pg/fg-ps-pg.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AddEmployeeComponent,
    ViewEmployeesComponent,
    EmployeeListComponent,
    LandingpageComponent,
    GenerateLettersComponent,
    SetupComponent,
    AddNewEmployeeComponent,
    BulkAddEmployeeComponent,
    ForgotPasswordComponent,
    FgPsPgComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,

    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
