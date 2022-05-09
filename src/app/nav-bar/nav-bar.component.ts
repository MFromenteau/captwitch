import { Component, OnInit } from '@angular/core';
import { UserGuard } from '../core/guards/user.guard';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  ytLink = 'https://www.youtube.com/channel/UCjmdNrSNVxnEqsl_I6tam-Q';
  twitchLink = 'https://twitch.tv/capcodtv';
  constructor(public userGuard: UserGuard) { }

  ngOnInit(): void {
  }

}
