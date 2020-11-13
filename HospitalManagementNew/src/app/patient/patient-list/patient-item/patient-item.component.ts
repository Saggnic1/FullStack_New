import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/model/patient';
import { RestServicesService } from 'src/app/service/rest-services.service';

@Component({
  selector: 'app-patient-item',
  templateUrl: './patient-item.component.html',
  styleUrls: ['./patient-item.component.css']
})
export class PatientItemComponent implements OnInit {

  @Input()patient:Patient;
  @Output() deletedPatientEvent :EventEmitter<any> = new EventEmitter<any>();
  constructor(private service :RestServicesService,private router:Router) { }

  ngOnInit(): void {
  }


  onEditClick(){
    this.router.navigate(['patient-detail',this.patient.id])
  }

  onDeletePatient(){
    this.service.deletePatientById(this.patient.id).subscribe(()=>{
      this.deletedPatientEvent.emit();
      
    });
    }
}
