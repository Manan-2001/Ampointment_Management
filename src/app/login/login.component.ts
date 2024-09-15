import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
constructor(private http: HttpClient,
  private route:Router,
){}

users:any;
ngOnInit(){
  let response=this.http.get("https://jainmanan03052001.wixsite.com/-appointment-managem/_functions/users"); 
  response.subscribe((response)=>{
    this.users=response;
    console.log(this.users);
  })
}

userName="";
password="";
loginSussesfull=false;
errorShow="";
login(){
  for (let element of this.users) {
    if (this.userName===element.userName && this.password===element.password) {
      this.loginSussesfull=true;
    }else{
      this.loginSussesfull=false;
      this.errorShow="Incorrect username or password";
    }
  }
}

}
