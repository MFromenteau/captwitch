import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserGuard } from '../core/guards/user.guard';
import { AccountService } from '../core/services/account/account.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @ViewChild("loginDialog") loginDialog: ElementRef;

  ytLink = 'https://www.youtube.com/channel/UCjmdNrSNVxnEqsl_I6tam-Q';
  twitchLink = 'https://twitch.tv/capcodtv';
  constructor(public userGuard: UserGuard, public accountService: AccountService) { }

  ngOnInit(): void {
    this.loginDialog.nativeElement.showModal();
  }

  sign(isLoggedIn: boolean) {
    if (isLoggedIn) {
      this.accountService.logout();
    } else {
      this.loginDialog.nativeElement.showModal();
    }
  }

  closeModal() {
    this.loginDialog.nativeElement.close();
  }
}
