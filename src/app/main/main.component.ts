import { Component, OnInit } from '@angular/core';
import { UserGuard } from '../core/guards/user.guard';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  constructor(public userGuard: UserGuard) {
  }

}
