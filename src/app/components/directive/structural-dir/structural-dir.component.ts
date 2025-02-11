import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-structural-dir",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./structural-dir.component.html",
  styleUrl: "./structural-dir.component.css",
})
export class StructuralDirComponent {
  isDiv1Visiable: boolean = true;
  isDiv2Visiable: boolean = true;

  num1: string = "";
  num2: string = "";

  isActive: boolean = false;

  selectedState: string = "India";

  //Array
  cityArray: string[] = ["Delhi", "Bangalore", "Pune", "Hyderabad"];

  studentList: any[] = [
    { studentId:1, name: "Upendra Rai", city: "Delhi", isActive: false },
    { studentId:2, name: "Lucky Rai", city: "Bangalore", isActive: true },
    { studentId:3, name: "Ravi Singh", city: "Pune", isActive: false },
    { studentId:4, name: "Surya Rai", city: "Hyderabad", isActive: false },
  ];

  showDiv1() {
    this.isDiv1Visiable = true;
  }
  hideDiv1() {
    this.isDiv1Visiable = false;
  }
  toggleDiv2() {
    this.isDiv2Visiable = !this.isDiv2Visiable;
    // if(this.isDiv2Visiable==true){
    // this.isDiv2Visiable=false;
    // }else{
    // this.isDiv2Visiable=true;
    // }
  }
}
