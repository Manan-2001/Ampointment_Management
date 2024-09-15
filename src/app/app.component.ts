import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from "./dashboard/dashboard.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, FormsModule, CommonModule, DashboardComponent],
  providers: [{ provide: HttpClient }],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Appointment_Management';
  btnlbl="Login"
  weatherData: any;
  apiKey = 'b373f36d481e7e05e79609016b87140c';
  private apiUrl = `https://api.openweathermap.org/data/2.5/weather`;
  constructor(
    private http: HttpClient,
  ) {}
  wanttobeLogin=false;
  id :any;
  user:any;
  loginClick(){
    if(this.wanttobeLogin){
      this.wanttobeLogin=false;
    } else{
      this.wanttobeLogin=true;
    }
  }
  ngOnInit() {
    this.getFormatedDate();
    let response=this.http.get("https://jainmanan03052001.wixsite.com/-appointment-managem/_functions/users"); 
  response.subscribe((response)=>{
    this.users=response;
    console.log(this.users);
  })
    this.getWeather('Nagpur');

    let responseData=this.http.get("https://jainmanan03052001.wixsite.com/-appointment-managem/_functions/apoointments");
    responseData.subscribe((result)=>{
      this.data=result;
      console.log(result);
    })

   for(let element of this.data){
    if(element.tableType=="t1"){
      this.datat1.push(element);
    }
    else{
      this.datat2.push(element);
    }
   }
  }
  date = '';
  getWeather(city: any) {
    let response = this.http.get(
      `${this.apiUrl}?q=${city}&appid=${this.apiKey}`
    );
    response.subscribe((data) => (this.weatherData = data));
  }
  getFormatedDate() {
    let currentdate = new Date();
    let UTCmonth = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    let month = UTCmonth[currentdate.getUTCMonth()];
    let date = currentdate.getDate();
    let year = currentdate.getFullYear();

    let UTCDay = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ];
    let day = UTCDay[currentdate.getDay() - 1];
    this.date = day + ', ' + month + ' ' + date + ' ' + year;
  }





users:any;
userName="";
password="";
loginSussesfull=false;
errorShow="";
logedInUser:any;

data:any=[];
datat1:any=[];
datat2:any=[];
login(){
  for (let element of this.users) {
    if (this.userName===element.userName && this.password===element.password) {
      this.loginSussesfull=true;
      this.btnlbl="Logout";
      this.logedInUser=element;
      this.wanttobeLogin=false;
    }else{
      this.loginSussesfull=false;
      this.errorShow="Incorrect username or password";
    }
  }
}
logout(){
this.logedInUser={};
this.btnlbl="Login";
this.wanttobeLogin=false;
this.loginSussesfull=false;
}

freeTimeSlott1(){

}
freeTimeSlott2(){

}




}
