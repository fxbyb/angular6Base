import { NgModule } from '@angular/core';
import { AppLayout } from './config';

@NgModule({
  imports: [
    ...AppLayout.modules
  ],
  providers: [],
  declarations: [
    ...AppLayout.components,
    ...AppLayout.header_components
  ],
  exports: [
    ...AppLayout.components
  ]
})
export class LayoutModule { }
