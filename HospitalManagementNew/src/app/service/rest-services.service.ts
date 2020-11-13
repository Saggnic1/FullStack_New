import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Clinician } from '../model/clinician';
import { Patient } from '../model/patient';

@Injectable({
  providedIn: 'root'
})
export class RestServicesService {

  private BASE_URL='http://localhost:8090';
  constructor(private http:HttpClient) { 
   
  }

  storeClinician(clinician:Clinician){

    return this.http.post(this.BASE_URL+'/clinician/api/clinician',clinician);

  }
  getAllClinician(){

    return this.http.get<Clinician[]>(this.BASE_URL+'/clinician/api/clinical');

  }
  searchClinicianBySpecialization(specialization:string){
    return this.http.get<Clinician[]>(this.BASE_URL+'/clinician/api/clinician/specialization/'+specialization);
  }

  searchClinicianById(id:string){
    return this.http.get<Clinician>(this.BASE_URL+'/clinician/api/clinician/'+id);
  }
  deleteClinicianById(id:string){
    return this.http.delete(this.BASE_URL+'/clinician/api/clinical/'+id);
  }


//Patient 
storePatient(patient:Patient){

  return this.http.post(this.BASE_URL+'/patient/api/patient/savePatient',patient);

}

getAllPatients(){

  return this.http.get<Patient[]>(this.BASE_URL+'/patient/api/patient/getAllPatients');

}



searchPatientById(id:number){

  return this.http.get<Patient>(this.BASE_URL+'/patient/api/patient/getPatientById/'+id);

}

deletePatientById(id:number){

  return this.http.delete(this.BASE_URL+'/patient/api/patient/patientsToBeDeleted/'+id);

}

findClinicianNameForPatient(){

  return this.http.get<string[]>(this.BASE_URL+'/patient/api/patient/getAllClinicianForPatient');

}

}
