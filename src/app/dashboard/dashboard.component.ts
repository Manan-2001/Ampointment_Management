
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  constructor(private api:HttpClient){}

  data:any=[];
  datat1:any=[];
  datat2:any=[];
  ngOnInit(){
    let response=this.api.get("https://jainmanan03052001.wixsite.com/-appointment-managem/_functions/apoointments");
    response.subscribe((result)=>{
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
  freeTimeSlott1(){

  }
  freeTimeSlott2(){

  }

}
