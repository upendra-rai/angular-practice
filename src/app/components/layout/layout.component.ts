import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  selectedRole: string = '';
  router =  inject(Router);
  loggedUserData: any;

  // constructor() {
  //   const loggedData = localStorage.getItem("loginUser");
  //   if(loggedData != null) {
  //     this.loggedUserData  = JSON.parse(loggedData);
  //   }
  // }
  logout() {
    localStorage.removeItem('loginUser');
    this.router.navigateByUrl('login')
  }
  //onRoleChnage(role: string) {
   // debugger;
    //this.deptService.onRoleChange$.next(role)
   // this.deptService.role$.next(role)
  //}

}
