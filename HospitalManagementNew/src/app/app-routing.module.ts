import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClinicianDetailComponent } from './clinician/clinician-detail/clinician-detail.component';
import { ClinicianItemComponent } from './clinician/clinician-list/clinician-item/clinician-item.component';
import { ClinicianListComponent } from './clinician/clinician-list/clinician-list.component';
import { HomeComponent } from './home/home.component';
import { PatientDetailsComponent } from './patient/patient-details/patient-details.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';

const routes: Routes = [
  { path: '', redirectTo: "home", pathMatch:'full' },
  { path: 'home', component: HomeComponent },
  { path: 'clinician-list', component: ClinicianListComponent },
  { path: 'clinician-detail', component: ClinicianDetailComponent },
  { path: 'clinician-detail/:id', component: ClinicianDetailComponent },
  { path: 'patient-list', component: PatientListComponent },
  { path: 'patient-detail/:id', component: PatientDetailsComponent },
  { path: 'patient-detail', component: PatientDetailsComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
