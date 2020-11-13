import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Clinician } from 'src/app/model/clinician';
import { RestServicesService } from 'src/app/service/rest-services.service';

@Component({
  selector: 'app-clinician-detail',
  templateUrl: './clinician-detail.component.html',
  styleUrls: ['./clinician-detail.component.css']
})
export class ClinicianDetailComponent implements OnInit {
  signupForm: FormGroup; 
  clinicianModel:Clinician;
  hasError:boolean
  hasBeenSubmitted:boolean;
  id:string;
  constructor(private service:RestServicesService , private route:ActivatedRoute,private router:Router) {
    this.hasError= false;
    this.hasBeenSubmitted=false;
   }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    
    if(!(this.id===null || this.id === undefined)){

      this.service.searchClinicianById(this.id).subscribe(
        (response)=>{
          this.clinicianModel=response;
          console.log(this.clinicianModel);
          this.signupForm = new FormGroup({
            full_name: new FormControl(this.clinicianModel.fullName,[Validators.required]),
            age: new FormControl(this.clinicianModel.age),
            phone_number: new FormControl(this.clinicianModel.phoneNumber,[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
            specialization: new FormControl(this.clinicianModel.specialization,[Validators.required]),
            proficiency: new FormControl(this.clinicianModel.proficiency,[Validators.required]),
            timing: new FormControl(this.clinicianModel.timings,[Validators.required]),
            address: new FormControl(this.clinicianModel.address,[Validators.required]),
            gender: new FormControl(this.clinicianModel.gender),
      
          });
          
        },(error) =>{
          console.error(error);
          this.hasError=true;
        }
      );

     

    }else{
      this.signupForm = new FormGroup({
        full_name: new FormControl(null,[Validators.required]),
        age: new FormControl(null),
        phone_number: new FormControl(null,[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
        specialization: new FormControl(null,[Validators.required]),
        proficiency: new FormControl(null,[Validators.required]),
        timing: new FormControl(null,[Validators.required]),
        address: new FormControl(null,[Validators.required]),
        gender: new FormControl('Male'),
        
        
      });
    }
   
  }

  onSubmit(){
    if(this.signupForm.valid){

      console.log(this.signupForm);
      this.clinicianModel= new Clinician();
      this.clinicianModel.fullName=this.signupForm.value['full_name'];
      this.clinicianModel.age=this.signupForm.value['age'];
      this.clinicianModel.phoneNumber=this.signupForm.value['phone_number'];
      this.clinicianModel.specialization=this.signupForm.value['specialization'];
      this.clinicianModel.proficiency=this.signupForm.value['proficiency'];
      this.clinicianModel.timings=this.signupForm.value['timing'];
      this.clinicianModel.address=this.signupForm.value['address'];
      this.clinicianModel.gender=this.signupForm.value['gender'];
      if(!(this.id===null || this.id === undefined)){
        this.clinicianModel.id=this.id;
      }
     
      this.service.storeClinician(this.clinicianModel).subscribe(
        (response)=>{
          console.log(response);
          this.hasBeenSubmitted=true;
          this.signupForm.reset();
          this.router.navigate(['clinician-list'])
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
