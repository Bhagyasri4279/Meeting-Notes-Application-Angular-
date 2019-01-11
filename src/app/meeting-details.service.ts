import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject ,Observable, BehaviorSubject } from 'rxjs';

export type FormData = { title:string,Date:string,summary:string };

export interface user{

}


@Injectable({
  providedIn: 'root'
})
export class MeetingDetailsService {

  os : Observable<any>;

public meetingType= new BehaviorSubject('allMeetings')
  private s = new Subject();
  public loginSub = new Subject(); 
  public nameSub = new Subject();

  constructor(private http: HttpClient) { 
    this.os = this.s.asObservable();
  }

  getUser(data) {
    console.log(data)
    return this.http.get(`http://172.17.15.100:3000/notes/login?Email=${data.email}&Password=${data.password}`).pipe(map(data => data as Array<user>));
  }

  getAllMeetings() {
    let email = localStorage.getItem('UserEmail')
    let id = localStorage.getItem('UserId')
    return this.http.get(`http://172.17.15.100:3000/notes/getAllNotes?Email=${email}&HostUserId=${id}`) 
  }
  
  createMeeting(FormData, employee){
    let body = {
HostUserId: localStorage.getItem('UserId'),
Title: FormData.title,
Description: FormData.summary,
HostName: localStorage.getItem('UserName'),
HostDate: FormData.date,
Email:localStorage.getItem('UserEmail'),
Summary: FormData.summary,
IsDeleted: "0",
CreatedBy: localStorage.getItem('UserName'),
ModifiedBy: localStorage.getItem('UserName'),
Attendees: [],
}
employee.forEach(element => {
  body.Attendees.push(
    {
      AttendeeUserId: element.UserId,
      Title: FormData.title,
      Description: FormData.summary,
      Summary: FormData.summary
      }
  )
});

    return this.http.post('http://172.17.15.100:3000/notes/addNote',body)

  }


  deletedMeeting(id){
    let email = localStorage.getItem('UserEmail')
    return this.http.delete(`http://172.17.15.100:3000/notes/delete?Email=${email}&Id=${id}`)
  }


  updatedMeeting(FormData, meetingData){
    console.log(meetingData)
    let body = {
      // HostUserId: localStorage.getItem('UserId'),
      Id: meetingData.Id,
      Title: FormData.title,
      Description: FormData.summary,
      // HostName: localStorage.getItem('UserName'),
      HostDate: FormData.date,
      Email:localStorage.getItem('UserEmail'),
      Summary: FormData.summary,
      // IsDeleted: "0",
      // CreatedBy: localStorage.getItem('UserName'),
      // ModifiedBy: localStorage.getItem('UserName'),
      // Attendees: [],
      }
      // employee.forEach(element => {
      //   body.Attendees.push(
      //     {
      //       AttendeeUserId: element.UserId,
      //       Title: FormData.title,
      //       Description: FormData.summary,
      //       Summary: FormData.summary
      //       }
      //   )
      // });
    return this.http.put(`http://172.17.15.100:3000/notes/update?Email=${localStorage.getItem('UserEmail')}&Id=${meetingData.Id}`,body)
  }
  
}
