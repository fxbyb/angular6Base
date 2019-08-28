import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AppShared } from './config';

@NgModule({
  imports: [
    ...AppShared.modules,
    ...AppShared.thirdModules
  ],
  declarations: [
    ...AppShared.components,
    ...AppShared.directives,
    ...AppShared.pipes
  ],
  exports: [
    ...AppShared.modules,
    ...AppShared.thirdModules,
    ...AppShared.components,
    ...AppShared.directives,
    ...AppShared.pipes
  ],
  providers: [
    DatePipe,
    ...AppShared.services
  ]
})
export class SharedModule { }
