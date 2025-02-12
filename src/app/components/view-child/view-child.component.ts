import { Component, ElementRef, ViewChild,AfterViewInit } from '@angular/core';
import { AlertComponent } from '../reuseable/alert/alert.component';


@Component({
  selector: 'app-view-child',
  standalone: true,
  imports: [AlertComponent],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css'
})
export class ViewChildComponent  implements AfterViewInit {
  @ViewChild('txtName')textBox?: ElementRef;

  ngAfterViewInit(): void {
    const value=this.textBox?.nativeElement.value;
    
  }

}
