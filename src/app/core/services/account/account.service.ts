import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../../classes/login-model';
import { BaseCustomHttpService } from '../base-custom-http/base-custom-http.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService extends BaseCustomHttpService {

  public isLoggedIn = false;
  private tokenKey = 'token';

  constructor(protected override httpClient: HttpClient) {
    super(httpClient, 'account');
  }

  public login(loginModel: LoginModel) {
    this.httpClient.post<any>(`${this.apiUrl}login`, loginModel).subscribe({
      next: (res) => {
        const token = res.token;
        localStorage.setItem(this.tokenKey, token);
        this.isLoggedIn = true;
      },
      error: (err) => {
        this.isLoggedIn = false;
      }
    });
  }

  public verifyLogin() {
    const token = localStorage.getItem(this.tokenKey);
    this.isLoggedIn = !!token;
  }

  public logout() {
    localStorage.removeItem(this.tokenKey);
    this.isLoggedIn = false;
  }

  public signIn(loginModel: LoginModel) {
    return this.httpClient.post<any>(`${this.apiUrl}signin`, loginModel);
  }
}
