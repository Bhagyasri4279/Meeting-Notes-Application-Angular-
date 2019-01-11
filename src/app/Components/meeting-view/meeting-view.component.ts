import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatChipInputEvent} from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { FormControl,  FormGroup , FormBuilder,Validators,FormGroupDirective} from '@angular/forms';
import { MeetingDetailsService } from '../../meeting-details.service';

export interface Employee {

}

@Component({
  selector: 'app-meeting-view',
  templateUrl: './meeting-view.component.html',
  styleUrls: ['./meeting-view.component.css']
})
export class MeetingViewComponent implements OnInit {

  MeetingForm: FormGroup; 

  
  FormData={'title':'','date':'','summary':''}
  
  constructor(public dialogRef: MatDialogRef<MeetingViewComponent>,private fb: FormBuilder,private meetingService:MeetingDetailsService,
    @Inject(MAT_DIALOG_DATA) public data) {

    this.MeetingForm = fb.group({  
      'title' : [null, Validators.required],  
      'date' : [null, Validators.required],   
      'summary' : [null]
        })

   }


  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  Employees:any[] = [];

  ngOnInit() {
    
    console.log(this.data)
    if(this.data===null || this.data===undefined){
           this.Employees = JSON.parse(localStorage.getItem('Subordinates'))
           console.log("attendeessssssss",this.Employees)
    }
    else{
      this.Employees=this.data.Attendees
      this.MeetingForm.patchValue({
        title:this.data.Title,
        date:this.data.HostDate,
        summary:this.data.Summary

      })
    }
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add attendee
    if ((value || '').trim()) {
      this.Employees.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(emp: Employee): void {
    const index = this.Employees.indexOf(emp);

    if (index >= 0) {
      this.Employees.splice(index, 1);
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }

  create(){
         alert('Added successfully')
     this.FormData=this.MeetingForm.value;
          if(this.data===null || this.data===undefined){
            this.meetingService.createMeeting(this.FormData, this.Employees).subscribe(res => {
              console.log(res)
              this.dialogRef.close('created');
          })
          }
          else{
            this.meetingService.updatedMeeting(this.FormData,this.data).subscribe(res=>{
              console.log(res)
              this.dialogRef.close('created');
            })
          }
  }
  

}
