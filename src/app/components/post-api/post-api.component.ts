import { HttpClient } from '@angular/common/http';
import { Component, inject ,OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepertmentService } from '../../service/depertment.service';
import { MyButtonComponent } from '../reuseable/my-button/my-button.component';
import { AlertComponent } from '../reuseable/alert/alert.component';


@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [FormsModule,MyButtonComponent,AlertComponent],
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

 constructor(private deptserv: DepertmentService){

 }

 ngOnInit(): void {
   this.getDepartment();
 }

// onSave(){
//   this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment",this.deptObj).subscribe((res:any)=>{
//     if(res.result==true){
//       alert("Department Created Successfully")
//       this.getDepartment
//     }else{
//      alert(res.message);
//     }
//     })
//   }

onSave(){
  this.deptserv.saveNewDept(this.deptObj).subscribe((res:any)=>{
   if(res.result==true){
     alert("Department Created Successfully")
      this.getDepartment();
    }else{
       alert(res.message);
    }
  })
}

  // getDepartment() {
  //   this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment").subscribe((res:any)=>{
  //     this.deptList = res.data;
  //   })
  // }

   getDepartment() {
   this.deptserv.getAllDept().subscribe((res:any)=>{
    this.deptList = res.data;
   })
  }

  onEdit(data: any){
    this.deptObj =data;
  }

  onDelete(id :number){
    const isDelete= confirm("Are you sure want to delete");
    if(isDelete){
this.http.delete("https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId="+id).subscribe((res:any)=>{
    if(res.result==true){
      this.getDepartment();
      alert("Department Deleted Successfully")
    }else{
     alert(res.message);
    }
    })
    }
    
  }

  onUpdate(){
    this.http.post("https://projectapi.gerasim.in/api/Complaint/updateDepartment",this.deptObj).subscribe((res:any)=>{
    if(res.result==true){
      alert("Department Updated Successfully")
      this.getDepartment();
    }else{
     alert(res.message);
    }
    })
  }

  
}
