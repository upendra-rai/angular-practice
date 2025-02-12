import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant1 } from '../constant/Constant1';




@Injectable({
  providedIn: 'root'
})
export class DepertmentService {


  constructor(private http:HttpClient) { }

  getAllDept(){
    return this.http.get(Constant1.API_URL+"GetParentDepartment");
  }


  saveNewDept(data:any){
    return this.http.post(`${Constant1.API_URL}AddNewDepartment`,data);
  }
}
