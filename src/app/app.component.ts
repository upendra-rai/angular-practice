import { Component } from '@angular/core';

import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { StructuralDirectiveComponent } from './components/directive/structural-directive/structural-directive.component';

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
