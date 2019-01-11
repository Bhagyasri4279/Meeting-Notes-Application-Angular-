import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-created-meetings',
  templateUrl: './created-meetings.component.html',
  styleUrls: ['./created-meetings.component.css']
})
export class CreatedMeetingsComponent implements OnInit {

  constructor(private router: Router) { }

  MeeetingList = [
    { 
      'host': 'Kunal',
      'title': 'ABC Sprint1 Demo',
      'date': '12/12/2018'
    },
    {
      'host': 'Kalpesh',
      'title': 'ABC Sprint2 Demo',
      'date': '12/22/2018' 
  },
  {
    'host': 'Rahul',
    'title': 'ABC Sprint3 Demo',
     'date': '12/28/2018'
  },
  {
    'host': 'Kunal',
    'title': 'ABC Sprint1 Demo1',
    'date': '12/31/2018'
  },
  { 
    'host': 'Soni',
    'title': 'ABC Sprint1 Demo2',
    'date': '1/12/2019' 
  },
  {
    'host': 'Kalpesh',
    'title': 'ABC Sprint2 Scrum',
    'date': '1/22/2019' 
},
{
  'host': 'Kunal',
  'title': 'ABC Sprint2 Demo1',
  'date': '2/1/2019'
},
{
  'host': 'Soni',
  'title': 'ABC Sprint2 Demo2',
  'date': '2/12/2019'
},
{
  'host': 'Kunal',
  'title': 'ABC Sprint2 Demo1',
  'date': '2/22/2019' 
},
{
  'host': 'Soni',
  'title': 'ABC Sprint2 Demo2',
  'date': '2/31/2019' 
},
]

name='Kunal';
  displayedColumns: string[] = ['host', 'title', 'date','edit','delete'];
  dataSource=[];
  created=[];
  sample=[];

  Currentdate = new Date()+"UTC";
  meetingDate = new Date();

  ngOnInit() {

    this.createdMeetings();
    
  }

  createdMeetings(){
    
       for(let i=0;i<this.MeeetingList.length;i++){
        //console.log(this.MeeetingList[i].host,'',this.name)
       // console.log(this.name)
            if(this.MeeetingList[i].host === this.name && new Date(this.MeeetingList[i].date) > new Date())
            {
              
             // console.log(this.MeeetingList[i])
              this.created.push(this.MeeetingList[i]);
             // console.log(this.created)
              
            }   
             else if(this.MeeetingList[i].host === this.name && new Date(this.MeeetingList[i].date) < new Date()){
               this.sample.push(this.MeeetingList[i])
               console.log(this.sample)
             }

        
        }

        this.dataSource=this.created;
   }

   


   tabChange(event) {
    console.log(event.index)
    if(event.index===0) {
      this.dataSource = this.created;
    } else if(event.index === 1) {
      this.dataSource = this.sample;
    }

  }
}
