// modules
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// third modules
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FileUploadModule } from 'ng2-file-upload';
// components

// directives
import { FontColorDirective } from '@shared/dicrective/fontcolor';
import { CoreService } from '@shared/services/core.service';
import { DataService } from '@shared/services/data.service';
import { RouterGuideService } from '@shared/services/router.guide.service';
import { UploadAttachmentComponent } from '@shared/components/upload-attachment';
// pipes

// services


export const AppShared = {
  modules: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  thirdModules: [
    NgZorroAntdModule,
    FileUploadModule
  ],
  components: [
    UploadAttachmentComponent
  ],
  directives: [
    FontColorDirective
  ],
  pipes: [

  ],
  services: [
    CoreService,
    DataService,
    RouterGuideService
  ]
};
