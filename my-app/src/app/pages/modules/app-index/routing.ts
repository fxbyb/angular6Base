import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from '@pages/indexcomponent';
import { RouterGuideService } from '@shared/services/router.guide.service';

const routes: Routes = [
  { path: '', component: IndexComponent, canActivate: [RouterGuideService]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
