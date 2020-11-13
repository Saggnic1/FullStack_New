import { Component, OnInit } from '@angular/core';
import { Clinician } from '../model/clinician';
import { Patient } from '../model/patient';
import { RestServicesService } from '../service/rest-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public patients:Patient[]=[];
  public clinicians:Clinician[]=[];
  searchText:string='';
  constructor(private service:RestServicesService) { }

  ngOnInit(): void {
    this.fetchAllPatients();
    this.fetchAllClinicians();
  }



  fetchAllPatients(){
    var arr:Patient[]=[];
     this.service.getAllPatients().subscribe(
       (response)=>{
         
         for (let entry of response) {
           var paitentModel = new Patient();
           paitentModel.fullName=entry.fullName;
           paitentModel.gender=entry.gender;
           paitentModel.age=entry.age;
           paitentModel.phoneNumber=entry.phoneNumber;
           paitentModel.address=entry.address;
           paitentModel.occupation=entry.occupation;
           paitentModel.clinician=entry.clinician;
           paitentModel.id=entry.id;
 
           //console.log(clinicianModel); 
           arr.push(paitentModel);
          // this.clinicians.push(clinicianModel);
         }
         this.patients=arr;
         console.log(this.patients);
         
       },(error) =>{
         console.error(error);
         
       }
     );
    
   
   }


   fetchAllClinicians(){
    var arr:Clinician[]=[];
     this.service.getAllClinician().subscribe(
       (response)=>{
         
         for (let entry of response) {
           var clinicianModel = new Clinician();
           clinicianModel.fullName=entry.fullName;
           clinicianModel.gender=entry.gender;
           clinicianModel.age=entry.age;
           clinicianModel.phoneNumber=entry.phoneNumber;
           clinicianModel.address=entry.address;
           clinicianModel.specialization=entry.specialization;
           clinicianModel.proficiency=entry.proficiency;
           clinicianModel.timings= entry.timings;
           clinicianModel.id=entry.id;
 
           //console.log(clinicianModel); 
           arr.push(clinicianModel);
          // this.clinicians.push(clinicianModel);
         }
         this.clinicians=arr;
         console.log(this.clinicians);
         
       },(error) =>{
         console.error(error);
         
       }
     );
    
    console.log(this.clinicians);
     
   }
 
}
