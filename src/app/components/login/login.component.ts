import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userObj: any ={
    userName:'',
    password:''
  }

  router=inject(Router);
  http=inject(HttpClient);

  login(){
    if(this.userObj.userName=="admin" && this.userObj.password== "123"){
      alert("login Success");
      localStorage.setItem('loginUser',this.userObj.userName);
      this.router.navigateByUrl('attribute')
    }else{
        alert("Wrong Credential");
    }
  }

   login1(){
    debugger;
    this.router.navigateByUrl('add-emp')
    this.http.post("https://projectapi.gerasim.in/api/Users/Login", this.userObj).subscribe((res:any)=>{
      if(res.result) {
        alert("login Success");
        localStorage.setItem('loginUser', JSON.stringify(res.data) )
        this.router.navigateByUrl('add-emp')
      } else {
        alert(res.message)
        this.router.navigateByUrl('add-emp')
      }
    })
}
}