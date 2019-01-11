import { Component, OnInit } from '@angular/core';
import {Event, NavigationEnd, Router} from '@angular/router';
import { MeetingDetailsService } from 'src/app/meeting-details.service';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css']
})
export class SideNavbarComponent implements OnInit {

  public appDrawer: any;
  constructor(private router: Router,private meetingService:MeetingDetailsService) {
    
   }

  ngOnInit() {
  }
  
  meetings(type){
    console.log(type)
    this.meetingService.meetingType.next(type);
    
  }

  
}
