import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';
import { StreamEventModule } from './stream-event/stream-event.module';
import { StreamRequestModule } from './stream-request/stream-request.module';
import { LoginModule } from '../login/login.module';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: '', component: MainComponent }
];

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    StreamEventModule,
    SharedModule,
    StreamRequestModule,
    LoginModule
  ]
})
export class MainModule { }
