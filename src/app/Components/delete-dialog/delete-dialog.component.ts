import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { MeetingDetailsService } from '../../meeting-details.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data, private meetingService:MeetingDetailsService) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  delMeeting(){
      console.log(this.data.Id)
      this.meetingService.deletedMeeting(this.data.Id).subscribe(res => {
        console.log(res)
        this.dialogRef.close('deleted');
    })

      // http://localhost:3000/notes/delete?Email=vsagi@miraclesoft.com&Id=41 ---- Delete
  }

}
