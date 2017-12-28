import { Component } from '@angular/core';
import { AuthenticationService } from '@etech/shared'

@Component({
  selector: 'etech-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  navOpen = 'true'
  constructor(private authService: AuthenticationService) {}

  toggleSidenav() {
    this.navOpen = this.navOpen === 'true' ? 'false' : 'true'
  }

  logout(){
    this.authService.logout()
  }

}
