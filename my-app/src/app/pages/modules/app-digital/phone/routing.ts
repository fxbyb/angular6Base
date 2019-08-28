import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheapComponent } from '@pages/digital/phone/cheap/index.component';
import { ExpensiveComponent } from '@pages/digital/phone/expensive/index.component';
import { RouterGuideService } from '@shared/services/router.guide.service';

const routes: Routes = [
    { path: 'expensive', component: ExpensiveComponent, canActivate: [RouterGuideService] },
    { path: 'cheap', component: CheapComponent, canActivate: [RouterGuideService] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhoneRoutingModule { }
