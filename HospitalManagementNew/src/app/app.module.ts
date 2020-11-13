import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ClinicianComponent } from './clinician/clinician.component';
import { ClinicianDetailComponent } from './clinician/clinician-detail/clinician-detail.component';
import { ClinicianListComponent } from './clinician/clinician-list/clinician-list.component';
import { ClinicianItemComponent } from './clinician/clinician-list/clinician-item/clinician-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { PatientComponent } from './patient/patient.component';
import { PatientDetailsComponent } from './patient/patient-details/patient-details.component';
import { PatientItemComponent } from './patient/patient-list/patient-item/patient-item.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FilterPipe } from './pipes/pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClinicianComponent,
    ClinicianDetailComponent,
    ClinicianListComponent,
    ClinicianItemComponent,
    PatientListComponent,
    PatientComponent,
    PatientDetailsComponent,
    PatientItemComponent,
    HomeComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
