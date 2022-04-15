import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StreamRequestFormComponent } from './stream-request-form/stream-request-form.component';
import { StreamRequestsDisplayerComponent } from './stream-requests-displayer/stream-requests-displayer.component';
import { StreamRequestDisplayerComponent } from './stream-request-displayer/stream-request-displayer.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StreamRequestFormComponent,
    StreamRequestsDisplayerComponent,
    StreamRequestDisplayerComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    StreamRequestFormComponent,
    StreamRequestsDisplayerComponent,
    StreamRequestDisplayerComponent
  ]
})
export class StreamRequestModule { }
