import { NgModule } from '@angular/core';
import { AppLayout } from './config';
import { CoreService } from '../../shared/services/core.service';

@NgModule({
  imports: [
    ...AppLayout.modules
  ],
  providers: [CoreService],
  declarations: [
    ...AppLayout.components,
    ...AppLayout.header_components
  ],
  exports: [
    ...AppLayout.components
  ]
})
export class LayoutModule { }
