import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
// layout
import { LoginComponent } from '../../login/login.component';
import { DefaultLayoutComponent } from '../../layout/default/default.component';
import { MenuLayoutComponent } from '../../layout/menu_layout/menu.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      { path: 'home', loadChildren: '../app-index#IndexModule' },
    ]
  },
  {
    path: '',
    component: MenuLayoutComponent,
    children: [
      { path: 'digital', loadChildren: '../app-digital#DigitalModule' },
    ]
  },
  {path: '**', redirectTo: 'login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
