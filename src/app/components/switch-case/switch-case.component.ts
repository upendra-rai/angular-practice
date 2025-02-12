import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-switch-case',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './switch-case.component.html',
  styleUrl: './switch-case.component.css'
})
export class SwitchCaseComponent {
 dayNumber: string= '';
}
