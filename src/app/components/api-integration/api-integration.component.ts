import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { AlertComponent } from '../reuseableComponent/alert/alert.component';

@Component({
  selector: 'app-api-integration',
  standalone: true,
  imports: [AlertComponent],
  templateUrl: './api-integration.component.html',
  styleUrl: './api-integration.component.css'
})
export class ApiIntegrationComponent {
 //injection 1 way
 http1= inject(HttpClient);

 userList:any []=[];
 customerList:any []=[];

 // Dependency Injection 2 way
  constructor(private http: HttpClient){
    //this.getAllUser
  }

  getAllUser(){
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res :any)=>{
      this.userList=res;
    })
  }

   getAllCustomer(){
    this.http.get("https://projectapi.gerasim.in/api/PropertyBookingController/GetAllCustomer").subscribe((res :any)=>{
      debugger
      this.customerList=res.data;
    })
  }
}
