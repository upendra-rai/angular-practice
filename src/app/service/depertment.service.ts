import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepertmentService {

  apiUrl:string='https://projectapi.gerasim.in/api/Complaint/';
  constructor(private http:HttpClient) { }

  getAllDept(){
    return this.http.get(this.apiUrl+"GetParentDepartment");
  }


  saveNewDept(data:any){
    return this.http.post(`${this.apiUrl}AddNewDepartment`,data);
  }
}
