import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeesComponent } from './view-employees/view-employees.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'addEmployee', component: AddEmployeeComponent },
  { path: 'viewEmployees', component: ViewEmployeesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
