import { Routes } from '@angular/router';
import { AttributeDirectiveComponent } from './conponents/attribute-directive/attribute-directive.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { StructuralDirectiveComponent } from './components/directive/structural-directive/structural-directive.component';
import { IfElseComponent } from './components/if-else/if-else.component';
import { ForComponent } from './components/for/for.component';
import { SwitchCaseComponent } from './components/switch-case/switch-case.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { TemplateComponent } from './components/forms/template/template.component';
import { ReactiveComponent } from './components/forms/reactive/reactive.component';
import { ApiIntegrationComponent } from './components/api-integration/api-integration.component';
import { PostApiComponent } from './components/post-api/post-api.component';
import { NgTemplateComponent } from './components/ng-template/ng-template.component';
import { NgContainerComponent } from './components/ng-container/ng-container.component';
import { ViewChildComponent } from './components/view-child/view-child.component';

export const routes: Routes = [
    {
     path:'attribute',
     component: AttributeDirectiveComponent
   },
    {
     path:'employee',
     component: EmployeeListComponent
   },
    {
     path:'data-binding',
     component: DataBindingComponent
   },
   {
     path:'structual-directive',
     component: StructuralDirectiveComponent
   },
   {
     path:'if-else',
     component: IfElseComponent
   },
   {
     path:'for',
     component: ForComponent
   },
   {
     path:'switch-case',
     component: SwitchCaseComponent
   },
   {
     path:'pipe',
     component: PipeComponent
   },
   {
     path:'template',
     component: TemplateComponent
   },
   {
     path:'reactive',
     component: ReactiveComponent
   },
   {
     path:'api',
     component: ApiIntegrationComponent
   },
   {
     path:'post',
     component: PostApiComponent
   },
   {
     path:'ng',
     component: NgTemplateComponent
   },
   {
     path:'ng-cont',
     component: NgContainerComponent
   },
   {
     path:'view-child',
     component: ViewChildComponent
   },
];
