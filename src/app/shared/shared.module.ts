import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StreamRequestDisplayerComponent } from './stream-request-displayer/stream-request-displayer.component';
import { StreamRequestsDisplayerComponent } from './stream-requests-displayer/stream-requests-displayer.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StreamRequestDisplayerComponent,
    StreamRequestsDisplayerComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ], exports: [
    StreamRequestDisplayerComponent,
    StreamRequestsDisplayerComponent
  ]
})
export class SharedModule { }
