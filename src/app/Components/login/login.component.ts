import { Component, OnInit } from '@angular/core';
import { FormControl,  FormGroup , FormBuilder,Validators,FormGroupDirective} from '@angular/forms';
import {Router} from '@angular/router';
import { MeetingDetailsService } from '../../meeting-details.service';
import { HttpClient } from '@angular/common/http';

export interface user {
 
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  RegForm: FormGroup;  
  errorMessages: string;
  constructor(private fb: FormBuilder,private http: HttpClient,private router: Router,private meeetingService:MeetingDetailsService) { 

    this.RegForm = fb.group({  
      'email':['', Validators.compose([Validators.required,Validators.email])],  
      'password' : ['',Validators.compose([Validators.required,Validators.minLength(6)])], 
    })
  }

  email:string;
  password:string;
 
  Emp: user;

  ngOnInit() {
          
  }
 
  onSubmit(){
    this.meeetingService.getUser(this.RegForm.value).subscribe((data:any)=>{
      this.Emp=data;
      console.log(this.Emp);
      localStorage.setItem('isLogin','true')
      localStorage.setItem('UserName',data.LoginData.UserName)
      localStorage.setItem('UserEmail',data.LoginData.Email)
      localStorage.setItem('UserId',data.LoginData.UserId)
      localStorage.setItem('Subordinates',JSON.stringify(data.Subordinates))

      this.meeetingService.loginSub.next();
      this.router.navigateByUrl('dashboard');
      this.errorMessages = ''
      }, error => {
        console.log(error)
        if(error.status===404){
          this.errorMessages = 'Wrong credentials. Please validate'
        }
      });
  }

}
