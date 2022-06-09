import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StreamRequestDisplayerComponent } from './stream-request-displayer/stream-request-displayer.component';
import { StreamRequestsDisplayerComponent } from './stream-requests-displayer/stream-requests-displayer.component';
import { FormsModule } from '@angular/forms';
import { VoteSystemComponent } from './vote-system/vote-system.component';



@NgModule({
  declarations: [
    StreamRequestDisplayerComponent,
    StreamRequestsDisplayerComponent,
    VoteSystemComponent
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
