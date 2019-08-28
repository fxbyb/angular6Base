import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AndroidComponent } from '@pages/digital/iPaid/android/index.component';
import { IosComponent } from '@pages/digital/iPaid/ios/index.component';
import { RouterGuideService } from '@shared/services/router.guide.service';

const routes: Routes = [
    { path: 'android', component: AndroidComponent, canActivate: [RouterGuideService] },
    { path: 'ios', component: IosComponent, canActivate: [RouterGuideService] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IpaidRoutingModule { }
