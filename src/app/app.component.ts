import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AttributeDirectiveComponent } from './conponents/attribute-directive/attribute-directive.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-practice';
}
