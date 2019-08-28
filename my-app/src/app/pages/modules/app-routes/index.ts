import { NgModule } from '@angular/core';
import { RouteRoutingModule } from './routing';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouteRoutingModule
  ],
  providers: [
  ],
  exports: [
    RouterModule
  ]
})
export class RoutesModule {}
