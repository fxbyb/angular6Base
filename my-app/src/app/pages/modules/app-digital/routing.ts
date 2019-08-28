import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'phone', loadChildren: './phone#PhoneModule' },
    { path: 'ipaid', loadChildren: './iPaid#IpaidModule' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DigitaRoutingModule { }
