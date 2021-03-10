import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthorsService } from './authors.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Bookingmm App';
  courses = ["course1","courese2","course3"];
  count:any;
  users:any;
  authors:any;

  constructor(private http:HttpClient,service:AuthorsService){
    this.authors = service.getAuthor();
  }

  ngOnInit(){
    this.getUsers();
    
  }
  getUsers(){
    this.http.get("https://localhost:5001/api/users").subscribe(response=>{
      this.users = response;
    },err=>{console.log(err)}
    )

    this.count = this.courses.length ;
    
  }
}
