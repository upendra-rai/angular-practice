import { JsonPipe } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [FormsModule,JsonPipe],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent {

  formValue:any;

  studentObj:any={
    firstName:'',
    lastName:'',
    userName:'',  
    city:'',
    state:'',
    zipCode:'',
    isAcceptTerms:false
  }

 onSubmit(){
  debugger
 this.formValue=this.studentObj;
 }

 resetForm(){
 this.studentObj={
  firstName:'',
    lastName:'',
    userName:'',  
    city:'',
    state:'',
    zipCode:'',
    isAcceptTerms:false
 }
 }
}
