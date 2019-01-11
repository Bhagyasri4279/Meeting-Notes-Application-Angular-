import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogModule } from '@angular/material';
import { MeetingViewComponent } from '../meeting-view/meeting-view.component';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { MeetingDetailsService } from '../../meeting-details.service';
// var q = new Date()+"UTC";
// // var m = q.getMonth()+1;
// // var d = q.getDay();
// // var y = q.getFullYear();

// var date = new Date();

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {
  
//   host:string;
// title:string;
// date=new Date();

  indexValue=0;
  //allMeetingsData = []
  createdMeetingsData = []
  invitedMeetingsData = []

  allMeetingsData = [
    {
      "Id": 648,
      "HostId": 43,
      "HostUserId": 1,
      "HostEmail": "amuvvala@miraclesoft.com",
      "AttendeeUserId": 10,
      "Title": "THD",
      "Description": "Planning of Sprint 2",
      "Summary": "Regarding Application",
      "IsDeleted": 0,
      "HostDate": "2019-01-12T00:00:00.000Z",
      "Status": "pending"
      },
      {
      "Id": 654,
      "HostId": 45,
      "HostUserId": 2,
      "HostEmail": "brepalle@miraclesoft.com",
      "AttendeeUserId": 10,
      "Title": "THD 2.O",
      "Description": "Planning of Sprint 2",
      "Summary": "Regarding Application",
      "IsDeleted": 0,
      "HostDate": "2019-01-12T00:00:00.000Z",
      "Status": "pending"
      },
      {
        "Id": 42,
        "HostUserId": 10,
        "Title": "HomeDepot",
        "Description": "Planning of Sprint 2",
        "Attendees": [
        {
        "AttendeeUserId": 1,
        "Title": "HomeDepot",
        "Description": "Planning of Sprint 2",
        "Summary": "Regarding Basics and CRUD operations"
        },
        {
        "AttendeeUserId": 2,
        "Title": "HomeDepot",
        "Description": "Planning of Sprint 2",
        "Summary": "Regarding Basics and CRUD operations"
        },
        {
        "AttendeeUserId": 3,
        "Title": "HomeDepot",
        "Description": "Planning of Sprint 2",
        "Summary": "Regarding Basics and CRUD operations"
        },
        {
        "AttendeeUserId": 4,
        "Title": "HomeDepot",
        "Description": "Planning of Sprint 2",
        "Summary": "Regarding Basics and CRUD operations"
        },
        {
        "AttendeeUserId": 5,
        "Title": "HomeDepot",
        "Description": "Planning of Sprint 2",
        "Summary": "Regarding Basics and CRUD operations"
        }
        ],
        "HostName": "Vinod Sagi",
        "HostDate": "2019-01-09T18:30:00.000Z",
        "Email": "vsagi@miraclesoft.com",
        "Summary": "Regarding Application",
        "IsDeleted": 0,
        "CreatedOn": "2019-01-09T09:23:40.000Z",
        "ModifiedOn": "2019-01-09T09:23:40.000Z",
        "CreatedBy": "vsagi@miraclesoft.com",
        "ModifiedBy": "vsagi@miraclesoft.com"
        }
]
  displayedColumns: string[] = ['host', 'title', 'date','edit','delete'];
  dataSource=[];
  upcoming = [];
  completed = [];
meetingType = 'allMeetings'
  // Useful arrays

  
  
  Currentdate = new Date()+"UTC";
  meetingDate = new Date();
  constructor(public dialog: MatDialog, private meetingsService: MeetingDetailsService) { }
  showMeetingType='';
  ngOnInit() {
    //console.log(date); 
    // this.getMeetingsData()
    //this.getAllMeetingsData()
    this.meetingsService.meetingType.subscribe(res=>{
      console.log(res);
      this.getAllMeetingsData(res)
      this.meetingType = res
    })
    // this.setMeetingsData('allMeetings')

    
  if(this.meetingType==='allMeetings'){
    this.showMeetingType='All Meetings'
  }
  else if(this.meetingType==='createdMeetings'){
    this.showMeetingType='Created Meetings'
  }
  else{
    this.showMeetingType='Invited Meetings'
  }
  }
  
  getAllMeetingsData(type) {
     this.meetingsService.getAllMeetings().subscribe(res => {
       console.log(res)
       this.createdMeetingsData = res['Created Notes']
       this.invitedMeetingsData = res['Invited Notes']
       this.allMeetingsData = this.createdMeetingsData.concat(this.invitedMeetingsData);

       console.log("createddddddd",this.createdMeetingsData);
       console.log("invitedddddd",this.invitedMeetingsData);
       console.log("alllllllll",this.allMeetingsData);

       this.setMeetingsData(type)
     })
      // console.log(this.createdMeetingsData);
      // console.log(this.invitedMeetingsData);
      // console.log(this.allMeetingsData)
   //  this.getMeetingsData()
  }


  setMeetingsData(type) {
    console.log(this.allMeetingsData)
    this.upcoming = []
    this.completed = []
    let meetings=[]
    if(type==='allMeetings'){
      meetings=this.allMeetingsData;
    }
    else if(type==='createdMeetings'){
      meetings=this.createdMeetingsData;
    }
    else{
      meetings=this.invitedMeetingsData;
    }
    for(let i=0;i<meetings.length;i++){
    if(new Date(meetings[i].HostDate) > new Date() ){
           this.upcoming.push(meetings[i]);
    }
    else {
          this.completed.push(meetings[i]);
    }
  }
  if(this.indexValue===0) {
    this.dataSource = this.upcoming
  } else if(this.indexValue === 1) {
    this.dataSource = this.completed
  }

  //console.log(this.upcoming);

  }

  tabChange(event) {
    console.log(event.index)
    this.indexValue=event.index;
    if(event.index===0) {
      this.dataSource = this.upcoming
    } else if(event.index === 1) {
      this.dataSource = this.completed
    }

  }
 
  createMeeting():void {
    const dialogRef = this.dialog.open(MeetingViewComponent, {
      width: '600px',
      height: '500px',
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result==='created') {
        this.getAllMeetingsData(this.meetingType)
      }
       
    });
  }

 edit(data):void{

  const dialogRef = this.dialog.open(MeetingViewComponent, {
    width: '600px',
    height: '500px',
    data: data
  });
    
  dialogRef.afterClosed().subscribe(result => {
    console.log(result);
    if(result==='created') {
      this.getAllMeetingsData(this.meetingType)
    }
  });

 }

 deleteMeeting(element):void{

  const dialogRef1 = this.dialog.open(DeleteDialogComponent, {
    width: '300px',
    height: '250px',
    data : element
  });
    
  dialogRef1.afterClosed().subscribe(result => {
    console.log(result);
    if(result==='deleted') {
      this.getAllMeetingsData(this.meetingType)
    }
     
  });


 }

}
