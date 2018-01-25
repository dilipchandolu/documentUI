import { Component, OnInit, ViewChild } from '@angular/core';
import { DropzoneComponent, DropzoneDirective, DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})



export class UploadComponent implements OnInit {

    public type: string = 'component';
    public disabled: boolean = false;
    public config: DropzoneConfigInterface = {
        clickable: true,
        maxFiles: 5,
        autoReset: null,
        errorReset: null,
        cancelReset: null
    };

    @ViewChild(DropzoneComponent) componentRef: DropzoneComponent;
    @ViewChild(DropzoneDirective) directiveRef: DropzoneDirective;

  constructor() { }

  
  ngOnInit() {
  }

  public resetDropzoneUploads() {
      if (this.type === 'directive') {
          this.directiveRef.reset();
      } else {
          this.componentRef.directiveRef.reset();
      }
  }

  public onUploadError(args: any) {
      console.log('onUploadError:', args);

      //This is to reset the upload control
      this.resetDropzoneUploads();
  }

  public onUploadSuccess(args: any) {
      console.log('onUploadSuccess:', args);
  }
}
