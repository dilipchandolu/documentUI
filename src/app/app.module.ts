import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { DropzoneModule, DropzoneConfigInterface, DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { UploadComponent } from './upload/upload.component'

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
    // Change this to your upload POST address:
    url: 'https://httpbin.org/post',
    acceptedFiles: 'image/*',
    createImageThumbnails: true
};

@NgModule({
  declarations: [
      AppComponent,
      UploadComponent,
  ],
  imports: [
      BrowserModule,
      DropzoneModule
  ],
  providers: [
      {
          provide: DROPZONE_CONFIG,
          useValue: DEFAULT_DROPZONE_CONFIG
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
