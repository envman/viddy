import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';

import { environment } from '@etech/environments/environment'

@Injectable()
export class AuthenticationService {

  auth0 = new auth0.WebAuth({
    clientID: environment.clientId,
    domain: environment.domain,
    responseType: 'token id_token',
    audience: 'https://etech-dev.eu.auth0.com/userinfo',
    redirectUri: `${window.location.origin}/callback`,
    scope: 'openid'
  });

  constructor(public router: Router) {}

  login(): void {
    this.auth0.authorize()
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = ''
        this.setSession(authResult)
        this.router.navigate(['/'])
      } else if (err) {
        this.router.navigate(['/'])
        console.log(err)
      }
    });
  }

  setSession(authResult): void {
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime())
    localStorage.setItem('access_token', authResult.accessToken)
    localStorage.setItem('id_token', authResult.idToken)
    localStorage.setItem('expires_at', expiresAt)
  }

  logout(): void {
    localStorage.removeItem('access_token')
    localStorage.removeItem('id_token')
    localStorage.removeItem('expires_at')

    this.auth0.logout({
      returnTo: `${window.location.origin}/login`,
      clientID: environment.clientId
    });
  }

  isAuthenticated(): boolean {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'))
    return new Date().getTime() < expiresAt
  }

}
