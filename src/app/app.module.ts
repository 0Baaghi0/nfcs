import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpClientModule  } from '@angular/common/http';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeesComponent } from './view-employees/view-employees.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { GenerateLettersComponent } from './generate-letters/generate-letters.component';
import { SetupComponent } from './setup/setup.component';
import { AddNewEmployeeComponent } from './add-new-employee/add-new-employee.component';
import { BulkAddEmployeeComponent } from './bulk-add-employee/bulk-add-employee.component';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FileUploadModule } from 'ng2-file-upload';
import { EmployeeCardDisplayComponent } from './view-employees/employee-card-display/employee-card-display.component';
import { EmployeeFilterComponent } from './view-employees/employee-filter/employee-filter.component';
import { GetEmployeesService } from '../app/services/get-employees.service';
import { SignupComponent } from './login/signup/signup.component';
import { OtpComponent } from './otp/otp.component';
import { ResetComponent } from './otp/reset/reset.component';
import { ResetSuccessfulComponent } from './otp/reset-successful/reset-successful.component';
import { VerifySignUpComponent } from './login/verify-sign-up/verify-sign-up.component';
import { ConfirmationSignUpComponent } from './login/confirmation-sign-up/confirmation-sign-up.component';
import { AddTemplateComponent } from './generate-letters/add-template/add-template.component';
import { ProfileComponent } from './profile/profile.component';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';

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
    EmployeeCardDisplayComponent,
    EmployeeFilterComponent,
    SignupComponent,
    OtpComponent,
    ResetComponent,
    ResetSuccessfulComponent,
    VerifySignUpComponent,
    ConfirmationSignUpComponent,
    AddTemplateComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    EditorModule,
    FileUploadModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js'},
    GetEmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
