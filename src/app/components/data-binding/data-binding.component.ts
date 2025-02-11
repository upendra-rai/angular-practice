import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { single } from 'rxjs';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  // JavaScript have only 4 datatype -> String, number, boolean, date

  courseName : string ="Angular 18";

  stateName : string ="Bangalore";

  myClassName : string ="bg-primary";

  inputType="checkbox";

  rollNumber :number =123;

  isIndia : boolean =true;

  currentDate : Date = new Date();

  firstName  = signal("Upendra Rai");

  constructor(){

  }

  showAlert(message:string){
    alert(message)
  }

  changeCourseName( ){
    this.courseName="Reach JS";
    this.firstName.set("Lucky Rai");
  }

}
