import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-if-else',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './if-else.component.html',
  styleUrl: './if-else.component.css'
})
export class IfElseComponent {
  div1Visiable:boolean=true;
  isWarningDivVisiable:boolean=false;
  num1:string='';
  num2:string='';
  selectedStatus:string='';

   toggle(){
    this.isWarningDivVisiable=!this.isWarningDivVisiable;
  }
  hideDiv1(){
    this.div1Visiable=false;
  }

   showDiv1(){
    this.div1Visiable=true;
  }

}
