import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegistationComponent } from './registation/registation.component';
import { AuthGuard } from './auth.guard';
import { LogoutComponent } from './logout/logout.component';
import { DoctordetailsComponent } from './doctordetails/doctordetails.component';
import { AppointmentComponent } from './appointment/appointment.component';

const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      { path: 'patient', component: PatientComponent ,canActivate: [AuthGuard], data: { expectedRoles: ['admin', 'patient'] } },
      { path: 'logout', component: LogoutComponent },
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'Registration', component: RegistationComponent },
      { path: 'appointment', component: AppointmentComponent },
      { path: 'doctor', component: DoctorComponent, canActivate: [AuthGuard], data: { expectedRoles: ['admin', 'doctor'] } },
      { path: 'doctordetails', component: DoctordetailsComponent , canActivate: [AuthGuard], data: { expectedRoles: ['admin', 'doctor'] }}
 

    ]
  },     
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
