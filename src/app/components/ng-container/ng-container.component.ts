import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, inject } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-container.component.html',
  styleUrl: './ng-container.component.css'
})
export class NgContainerComponent {

  isContainer:boolean =true;
  isApi:boolean=false;

  userList :any[]=[];

  http=inject(HttpClient);

  getUser(){
    this.isApi=true;
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res :any)=>{
      this.userList=res;
      this.isApi=false;
    })
  }

}
