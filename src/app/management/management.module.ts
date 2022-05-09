import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ManagementComponent } from './management.component';

const routes: Routes = [
  {path: '', component: ManagementComponent}
]

@NgModule({
  declarations: [
    ManagementComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule
  ]
})
export class ManagementModule { }
