import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Patient } from 'src/app/model/patient';
import { RestServicesService } from 'src/app/service/rest-services.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  searchForm:FormGroup;
  fruits: string[] = ['Apple', 'Orange', 'Banana'];
  searchText:string='';
  public patients:Patient[]=[];
  constructor( private router:Router,private service:RestServicesService) { }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      firstName: new FormControl()
   });
   this.fetchAllClinician();
   console.log("Fetch called.")
   console.log(this.patients);
  }

  onAddNewPatient(){
    this.router.navigate(['/patient-detail']);
  }

  fetchAllClinician(){
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

   patientDeletedEvent(){
     this.fetchAllClinician();
     window.alert("Deleted Recod!!!");
   }
 
}
