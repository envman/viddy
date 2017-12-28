import { Component } from '@angular/core';

@Component({
  selector: 'etech-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'etech';
  navOpen = 'true'

  toggleSidenav() {
    this.navOpen = this.navOpen === 'true' ? 'false' : 'true'
  }
}
