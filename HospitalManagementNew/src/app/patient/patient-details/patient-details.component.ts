import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/model/patient';
import { RestServicesService } from 'src/app/service/rest-services.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

  signupForm: FormGroup; 
  patientModel:Patient;
  hasError:boolean
  hasBeenSubmitted:boolean;
  options:string[]=[];
  id:number;
  constructor(private route:ActivatedRoute,private service:RestServicesService,private router:Router) { }

  ngOnInit(): void {
    this.service.findClinicianNameForPatient().subscribe((response)=>{
      this.options=response;
    })
    this.id = this.route.snapshot.params['id'];
    
    if(!(this.id===null || this.id === undefined)){
      this.id = +this.route.snapshot.params['id'];
      this.service.searchPatientById(this.id).subscribe(
        (response)=>{
          this.patientModel=response;
          console.log(this.patientModel);
          this.signupForm = new FormGroup({
            full_name: new FormControl(this.patientModel.fullName,[Validators.required]),
            age: new FormControl(this.patientModel.age),
            phone_number: new FormControl(this.patientModel.phoneNumber,[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
            occupation: new FormControl(this.patientModel.occupation,[Validators.required]),
            clinician: new FormControl(this.patientModel.clinician,[Validators.required]),
            address: new FormControl(this.patientModel.address,[Validators.required]),
            gender: new FormControl(this.patientModel.gender),
            patient_id:new FormControl(this.patientModel.id),
      
          });
          
        },(error) =>{
          console.error(error);
          this.hasError=true;
        }
      );

    }else{

    this.signupForm = new FormGroup({
      patient_id:new FormControl(null,[Validators.required,Validators.maxLength(7)]),
      full_name: new FormControl(null,[Validators.required]),
      age: new FormControl(null),
      phone_number: new FormControl(null,[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      occupation: new FormControl(null,[Validators.required]),
      clinician: new FormControl(null,[Validators.required]),
      address: new FormControl(null,[Validators.required]),
      gender: new FormControl('Male'),
      
      
    });
  }



}

  onSubmit(){
    console.log(this.signupForm);
    if(this.signupForm.valid){

      console.log(this.signupForm);
      this.patientModel= new Patient();
      this.patientModel.id=this.signupForm.value['patient_id'];
      this.patientModel.fullName=this.signupForm.value['full_name'];
      this.patientModel.age=this.signupForm.value['age'];
      this.patientModel.phoneNumber=this.signupForm.value['phone_number'];
      this.patientModel.occupation=this.signupForm.value['occupation'];
      this.patientModel.clinician=this.signupForm.value['clinician'];

      this.patientModel.address=this.signupForm.value['address'];
      this.patientModel.gender=this.signupForm.value['gender'];
      if(!(this.id===null || this.id === undefined)){
        this.patientModel.id=this.id;
      }
     
      this.service.storePatient(this.patientModel).subscribe(
        (response)=>{
          console.log(response);
          this.hasBeenSubmitted=true;
          this.signupForm.reset();
          this.router.navigate(['patient-list'])
        },(error) =>{
          console.error(error);
          this.hasError=true;
        }
      );
    }
    else{
      this.hasError=true;
    }
  }

  onFormReset(){
    this.signupForm.reset();
  }
}
