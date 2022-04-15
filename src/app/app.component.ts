import { Component } from '@angular/core';
import { AccountService } from './core/services/account/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'capTwitch.front';

  constructor(private accountService: AccountService) {
    accountService.verifyLogin();
  }

}
