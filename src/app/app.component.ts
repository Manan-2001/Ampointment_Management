import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    FormsModule,
    CommonModule,
    DashboardComponent,
  ],
  providers: [{ provide: HttpClient }],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  slot9_10t1 = false;
  slot11_12t1 = false;
  slot10_11t1 = false;
  slot12_13t1 = false;
  slot13_14t1 = false;
  slot14_15t1 = false;
  slot10_11t2 = false;
  slot9_10t2 = false;
  slot12_13t2 = false;
  slot11_12t2 = false;
  slot13_14t2 = false;
  slot14_15t2 = false;
  set9_10_t1(){
    this.slot14_15t2 = false;
    this.slot9_10t1 = true;
    this.slot11_12t1 = false;
    this.slot10_11t1 = false;
    this.slot12_13t1 = false;
    this.slot13_14t1 = false;
    this.slot14_15t1 = false;
    this.slot10_11t2 = false;
    this.slot9_10t2 = false;
    this.slot12_13t2 = false;
    this.slot11_12t2 = false;
    this.slot13_14t2 = false;
  }
  set10_11_t1(){
    this.slot14_15t2 = false;
    this.slot9_10t1 = false;
    this.slot11_12t1 = false;
    this.slot10_11t1 = true;
    this.slot12_13t1 = false;
    this.slot13_14t1 = false;
    this.slot14_15t1 = false;
    this.slot10_11t2 = false;
    this.slot9_10t2 = false;
    this.slot12_13t2 = false;
    this.slot11_12t2 = false;
    this.slot13_14t2 = false;
  }
  set11_12_t1(){
    this.slot14_15t2 = false;
    this.slot9_10t1 = false;
    this.slot11_12t1 = true;
    this.slot10_11t1 = false;
    this.slot12_13t1 = false;
    this.slot13_14t1 = false;
    this.slot14_15t1 = false;
    this.slot10_11t2 = false;
    this.slot9_10t2 = false;
    this.slot12_13t2 = false;
    this.slot11_12t2 = false;
    this.slot13_14t2 = false;
  }
  set12_13_t1(){
    this.slot14_15t2 = false;
    this.slot9_10t1 = false;
    this.slot11_12t1 = false;
    this.slot10_11t1 = false;
    this.slot12_13t1 = true;
    this.slot13_14t1 = false;
    this.slot14_15t1 = false;
    this.slot10_11t2 = false;
    this.slot9_10t2 = false;
    this.slot12_13t2 = false;
    this.slot11_12t2 = false;
    this.slot13_14t2 = false;
  }
  set13_14_t1(){
    this.slot14_15t2 = false;
    this.slot9_10t1 = false;
    this.slot11_12t1 = false;
    this.slot10_11t1 = false;
    this.slot12_13t1 = false;
    this.slot13_14t1 = true;
    this.slot14_15t1 = false;
    this.slot10_11t2 = false;
    this.slot9_10t2 = false;
    this.slot12_13t2 = false;
    this.slot11_12t2 = false;
    this.slot13_14t2 = false;
  }

  set14_15_t1(){
    this.slot14_15t2 = false;
    this.slot9_10t1 = false;
    this.slot11_12t1 = false;
    this.slot10_11t1 = false;
    this.slot12_13t1 = false;
    this.slot13_14t1 = false;
    this.slot14_15t1 = false;
    this.slot10_11t2 = false;
    this.slot9_10t2 = false;
    this.slot12_13t2 = false;
    this.slot11_12t2 = false;
    this.slot13_14t2 = false;
  }

  selected14_15_t2() {
    this.tableType = 't2';
    this.timeslot = '14:00-15:00';
   
  }
  selected13_14_t2() {
    this.tableType = 't2';
    this.timeslot = '13:00-14:00';
   
  }
  selected12_13_t2() {
    this.tableType = 't2';
    this.timeslot = '12:00-13:00';
  }
  selected11_12_t2() {
    this.tableType = 't2';
    this.timeslot = '11:00-12:00';
  }
  selected10_11_t2() {
    this.tableType = 't2';
    this.timeslot = '10:00-11:00';
  }
  selected9_10_t2() {
    this.tableType = 't2';
    this.timeslot = '9:00-10:00';
  }
  selected14_15_t1() {
    this.tableType = 't1';
    this.timeslot = '14:00-15:00';
  }
  selected13_14_t1() {
    this.tableType = 't1';
    this.timeslot = '13:00-14:00';
  }
  selected12_13_t1() {
    this.tableType = 't1';
    this.timeslot = '12:00-13:00';
  }
  selected11_12_t1() {
    this.tableType = 't1';
    this.timeslot = '11:00-12:00';
  }
  selected10_11_t1() {
    this.tableType = 't1';
    this.timeslot = '10:00-11:00';
  }
  selected9_10_t1() {
    this.tableType = 't1';
    this.timeslot = '9:00-10:00';
  }
  title = 'Appointment_Management';
  btnlbl = 'Login';
  weatherData: any;
  apiKey = 'a0aca8a89948154a4182dcecc780b513';
  private apiUrl = `https://api.openweathermap.org/data/2.5/weather`;
  constructor(private http: HttpClient) {}
  wanttobeLogin = false;
  id: any;
  user: any;
  addAppointmentForm = true;
  dashboard = false;
  closeForm() {
    this.addAppointmentForm = false;
    this.dashboard = true;
    this.wanttobeLogin = false;
  }
  name = '';
  number = '';
  timeslot = '';
  tableType = '';
  addForm() {
    let itemToAdd = {
      name: this.name,
      number: this.number,
      date: new Date(),
      timeslot: this.timeslot,
      tabletype: this.tableType,
    };
    console.log(itemToAdd);
  }
  loginClick() {
    if (this.wanttobeLogin) {
      this.wanttobeLogin = false;
      this.dashboard = true;
    } else {
      this.wanttobeLogin = true;
      this.userName = '';
      this.password = '';
      this.dashboard = false;
    }
  }
  ngOnInit() {
    this.getFormatedDate();
    let response = this.http.get(
      'https://jainmanan03052001.wixsite.com/-appointment-managem/_functions/users'
    );
    response.subscribe((response) => {
      this.users = response;
      console.log(this.users);
    });
    this.getWeather('Nagpur');

    let responseData = this.http.get(
      'https://jainmanan03052001.wixsite.com/-appointment-managem/_functions/apoointments'
    );
    responseData.subscribe((result) => {
      this.data = result;
      console.log(result);
    });

    for (let element of this.data) {
      if (element.tableType == 't1') {
        this.datat1.push(element);
      } else {
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
    console.log(this.weatherData);
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

  users: any;
  userName = '';
  password = '';
  loginSussesfull = false;
  errorShow = '';
  logedInUser: any;

  data: any = [];
  datat1: any = [];
  datat2: any = [];
  login() {
    for (let element of this.users) {
      if (
        this.userName === element.userName &&
        this.password === element.password
      ) {
        this.loginSussesfull = true;
        this.btnlbl = 'Logout';
        this.logedInUser = element;
        this.wanttobeLogin = false;
        this.dashboard = true;
      } else {
        this.loginSussesfull = false;
        this.errorShow = 'Incorrect username or password';
      }
    }
  }
  logout() {
    this.logedInUser = {};
    this.btnlbl = 'Login';
    this.wanttobeLogin = false;
    this.loginSussesfull = false;
  }

  freeTimeSlott1() {}
  freeTimeSlott2() {}
}
