import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeesComponent } from './view-employees/view-employees.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { GenerateLettersComponent } from './generate-letters/generate-letters.component';
import { SetupComponent } from './setup/setup.component';
import { AddNewEmployeeComponent } from './add-new-employee/add-new-employee.component';
import { BulkAddEmployeeComponent } from './bulk-add-employee/bulk-add-employee.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FgPsPgComponent } from './fg-ps-pg/fg-ps-pg.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'forgotPassword', component:ForgotPasswordComponent},
  { path: 'home', component: HomeComponent },
  { path: 'addEmployee', component: AddEmployeeComponent },
  { path: 'viewEmployees', component: ViewEmployeesComponent },
  { path: 'generateLetters', component: GenerateLettersComponent },
  { path: 'setup', component: SetupComponent },
  { path: 'landing', component:LandingpageComponent},
  { path: 'addNewEmployeePage', component:AddNewEmployeeComponent},
  { path: 'bulkAddEmployee', component:BulkAddEmployeeComponent},
  { path: 'forgetPage', component:FgPsPgComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
