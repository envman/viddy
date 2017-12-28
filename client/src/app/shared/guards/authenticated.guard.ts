import { Injectable } from '@angular/core'
import { Router, CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'

import { AuthenticationService } from '../services'

@Injectable()
export class AuthenticatedGuard implements CanActivate, CanActivateChild {

  constructor(private authService: AuthenticationService, private router: Router) {}

  canActivate(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(!this.authService.isAuthenticated()){
      this.router.navigate(['login'])

      return false
    }

    return true
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.canActivate(childRoute, state)
  }
}
