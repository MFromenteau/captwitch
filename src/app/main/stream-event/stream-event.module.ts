import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StreamDisplayerComponent } from './stream-displayer/stream-displayer.component';
import { StreamsDisplayerComponent } from './streams-displayer/streams-displayer.component';
import { StreamEventFormComponent } from './stream-event-form/stream-event-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StreamDisplayerComponent,
    StreamsDisplayerComponent,
    StreamEventFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    StreamDisplayerComponent,
    StreamsDisplayerComponent,
    StreamEventFormComponent
  ]
})
export class StreamEventModule { }
