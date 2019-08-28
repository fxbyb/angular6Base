import { NgModule } from '@angular/core';
import { PhoneRoutingModule } from './routing';
import { RouterModule } from '@angular/router';
import { ExpensiveComponent } from '@pages/digital/phone/expensive/index.component';
import { CheapComponent } from '@pages/digital/phone/cheap/index.component';

@NgModule({
  imports: [
    PhoneRoutingModule
  ],
  declarations: [
    ExpensiveComponent,
    CheapComponent
  ],
  providers: [
  ],
  exports: [
    RouterModule
  ]
})
export class PhoneModule {}
