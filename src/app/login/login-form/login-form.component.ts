import { Component, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { LoginModel } from 'src/app/core/classes/login-model';
import { AccountService } from 'src/app/core/services/account/account.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @Input() isLoginForm = true;
  @Output() connected: Subject<any> = new Subject<any>();
  loginModel: LoginModel;
  constructor(public service: AccountService) {
    this.loginModel = <LoginModel>{};
  }

  ngOnInit(): void {
  }

  buttonAction() {
    if (!this.loginModel.pseudo || !this.loginModel.password) {
      alert('Il faut remplir les champs');
    }

    if (this.isLoginForm) {
      this.service.login(this.loginModel).subscribe({
        next: (res: boolean) => {
          this.connected.next(res);
        }
      });

    } else {
      this.service.signIn(this.loginModel).subscribe({
        next: (res) => {
          alert('Vous pouvez désormais vous connecter');
        }
      });
    }
  }

  logout() {
    this.service.logout();
  }
}
