import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  ytLink = 'https://www.youtube.com/channel/UCjmdNrSNVxnEqsl_I6tam-Q';
  twitchLink = 'https://twitch.tv/capcodtv';
  constructor() { }

  ngOnInit(): void {
  }

}
