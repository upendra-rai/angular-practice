import { HttpClient } from '@angular/common/http';
import { Component, inject ,OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent implements OnInit{
 deptList:any[] =[];
  deptObj:any={
  "departmentId":0,
  "departmentName":"",
  "departmentlogo":""
}
 http= inject(HttpClient);

 ngOnInit(): void {
   this.getDepartment();
 }

onSave(){
  this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment",this.deptObj).subscribe((res:any)=>{
    if(res.result==true){
      alert("Department Created Successfully")
      this.getDepartment
    }else{
     alert(res.message);
    }
    })
  }

  getDepartment() {
    this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment").subscribe((res:any)=>{
      this.deptList = res.data;
    })
  }
}
