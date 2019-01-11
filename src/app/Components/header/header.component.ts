import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MeetingDetailsService } from '../../meeting-details.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,private meetingService:MeetingDetailsService) { }
  loginEnable = false
  userName = ''
  ngOnInit() {
    this.loginEnable = localStorage.getItem('isLogin')==='true' ? true : false
    this.userName = localStorage.getItem('UserName')
    this.meetingService.loginSub.subscribe(res=>{
      this.loginEnable = localStorage.getItem('isLogin')==='true' ? true : false  
    }) 
    
    // this.meetingService.nameSub.subscribe(res=>{
      
    // })

  }

  logout(){
    this.router.navigateByUrl('');
    localStorage.clear()

    this.meetingService.loginSub.next();
  }

  profile(){
           
  }

}
