import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { DropzoneModule, DropzoneConfigInterface, DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { UploadComponent } from './upload/upload.componen;
import { ImportComponent } from './import/import.componen;
import { DocumentListComponent } from './document-list/document-list.component't't'

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
    // Change this to your upload POST address:
    url: 'https://httpbin.org/post',
    acceptedFiles: 'image/*',
    createImageThumbnails: true
};

@NgModule({
  declarations: [
      AppComponent,
      UploadCompone,
      ImportComponent,
      DocumentListComponentnt,
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
