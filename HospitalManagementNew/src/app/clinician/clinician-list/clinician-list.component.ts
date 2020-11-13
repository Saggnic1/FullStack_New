import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Clinician } from 'src/app/model/clinician';
import { RestServicesService } from 'src/app/service/rest-services.service';

@Component({
  selector: 'app-clinician-list',
  templateUrl: './clinician-list.component.html',
  styleUrls: ['./clinician-list.component.css']
})
export class ClinicianListComponent implements OnInit {

  searchForm:FormGroup;
  fruits: string[] = ['Apple', 'Orange', 'Banana'];
  public clinicians:Clinician[]=[];
  searchText: string='';
  constructor(private router:Router , private service:RestServicesService) { 

  }

  ngOnInit(): void {
    console.log(this.searchText);
    this.searchForm = new FormGroup({
      firstName: new FormControl()
   });
   this.fetchAllClinicians();
   console.log("Fetch called.")
   console.log(this.clinicians);
  }

  onAddNewClinician(){
    this.router.navigate(['/clinician-detail']);
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


  onSearchChange(searchValue: string): void {  
    console.log(searchValue);

    this.clinicians=this.clinicians.filter(obj => obj.fullName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) );
  }

  onOptionsSelected(value:string){
    console.log("Value is ---"+value);
    this.service.searchClinicianBySpecialization(value).subscribe((response)=>{
      console.log("Response---");
      console.log(response);
      this.clinicians=response;
    },(error)=>{
      window.alert("No data found for: " +value)

    })

  }

  onDEleteEvent(){
    this.fetchAllClinicians();
    window.alert("Deleted Recod!!!");
  }
}
