import { Routes } from "@angular/router";
import { AttributeDirectiveComponent } from "./conponents/attribute-directive/attribute-directive.component";
import { EmployeeListComponent } from "./components/employee-list/employee-list.component";
import { DataBindingComponent } from "./components/data-binding/data-binding.component";
import { StructuralDirectiveComponent } from "./components/directive/structural-directive/structural-directive.component";
import { IfElseComponent } from "./components/if-else/if-else.component";
import { ForComponent } from "./components/for/for.component";
import { SwitchCaseComponent } from "./components/switch-case/switch-case.component";
import { PipeComponent } from "./components/pipe/pipe.component";
import { TemplateComponent } from "./components/forms/template/template.component";
import { ReactiveComponent } from "./components/forms/reactive/reactive.component";
import { ApiIntegrationComponent } from "./components/api-integration/api-integration.component";
import { PostApiComponent } from "./components/post-api/post-api.component";
import { NgTemplateComponent } from "./components/ng-template/ng-template.component";
import { NgContainerComponent } from "./components/ng-container/ng-container.component";
import { ViewChildComponent } from "./components/view-child/view-child.component";

import { LayoutComponent } from "./components/layout/layout.component";
import { LoginComponent } from "./components/login/login.component";
import { authGuard } from "./service/auth.guard";

export const routes: Routes = [
  //default route
  {
    path: '',
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: "attribute",
        component: AttributeDirectiveComponent, canActivate:[authGuard]
      },
      {
        path: "employee",
        component: EmployeeListComponent, canActivate:[authGuard]
      },
      {
        path: "data-binding",
        component: DataBindingComponent,canActivate:[authGuard]
      },
      {
        path: "structual-directive",
        component: StructuralDirectiveComponent,canActivate:[authGuard]
      },
      {
        path: "if-else",
        component: IfElseComponent,canActivate:[authGuard]
      },
      {
        path: "for",
        component: ForComponent,canActivate:[authGuard]
      },
      {
        path: "switch-case",
        component: SwitchCaseComponent,canActivate:[authGuard]
      },
      {
        path: "pipe",
        component: PipeComponent,
      },
      {
        path: "template",
        component: TemplateComponent,canActivate:[authGuard]
      },
      {
        path: "reactive",
        component: ReactiveComponent,canActivate:[authGuard]
      },
      {
        path: "api",
        component: ApiIntegrationComponent,canActivate:[authGuard]
      },
      {
        path: "post",
        component: PostApiComponent,canActivate:[authGuard]
      },
      {
        path: "ng",
        component: NgTemplateComponent,canActivate:[authGuard]
      },
      {
        path: "ng-cont",
        component: NgContainerComponent,canActivate:[authGuard]
      },
      {
        path: "view-child",
        component: ViewChildComponent,canActivate:[authGuard]
      },
    ],
  },
];
