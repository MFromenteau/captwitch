import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { StreamRequestFormComponent } from './stream-request-form/stream-request-form.component';



@NgModule({
  declarations: [
    StreamRequestFormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    StreamRequestFormComponent
  ]
})
export class StreamRequestModule { }
