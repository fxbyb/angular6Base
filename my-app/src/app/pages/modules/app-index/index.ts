import { NgModule } from '@angular/core';
import { IndexRoutingModule } from './routing';
import { IndexComponent } from '../../pages/indexcomponent';
import { SharedModule } from '../app-shared';
import { IndexService } from '../../shared/services/index.service';

@NgModule({
  imports: [
      SharedModule,
    IndexRoutingModule
  ],
  declarations: [
      IndexComponent
  ],
  providers: [
    IndexService
  ]
})
export class IndexModule {}
