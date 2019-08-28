import { NgModule } from '@angular/core';
import { IpaidRoutingModule } from './routing';
import { RouterModule } from '@angular/router';
import { AndroidComponent } from '@pages/digital/iPaid/android/index.component';
import { IosComponent } from '@pages/digital/iPaid/ios/index.component';

@NgModule({
  imports: [
    IpaidRoutingModule
  ],
  declarations: [
    AndroidComponent,
    IosComponent
  ],
  providers: [
  ],
  exports: [
    RouterModule
  ]
})
export class IpaidModule {}
