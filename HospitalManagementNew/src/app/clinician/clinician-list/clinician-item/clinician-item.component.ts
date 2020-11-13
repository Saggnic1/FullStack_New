import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup ,Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { Clinician } from 'src/app/model/clinician';
import { RestServicesService } from 'src/app/service/rest-services.service';

@Component({
  selector: 'app-clinician-item',
  templateUrl: './clinician-item.component.html',
  styleUrls: ['./clinician-item.component.css']
})
export class ClinicianItemComponent implements OnInit {

  @Input()clinician:Clinician;
  @Output()deleteEvent :EventEmitter<any> = new EventEmitter<any>();
  public deleted:boolean=false;
  public image:string='../../../assets/medicine.jpg';
  
  constructor(private router:Router, private service:RestServicesService) { }

  ngOnInit(): void {
    switch(this.clinician.specialization) { 
      case "Neuro": { 
        this.image= '../../../assets/medicine.jpg';
         break; 
      } 
      case "Cardio": { 
        this.image= '../../../assets/doctor.jpg';
         break; 
      } 
      case "Ophthalmo": { 
        this.image= '../../../assets/medical.jpg';
         break; 
      } 
      default: { 
        this.image= '../../../assets/images.jpg';
         break; 
      } 
   } 
    
  }

  onEditClick(){
    this.router.navigate(['clinician-detail',this.clinician.id])
  }
  

  onDeleteClinician(){
  this.service.deleteClinicianById(this.clinician.id).subscribe(()=>{

    //this.router.navigate(['clinician-list']);
    this.deleteEvent.emit();
    
  });
  }
}