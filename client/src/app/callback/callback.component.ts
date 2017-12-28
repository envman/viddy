import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@etech/shared'

@Component({
  selector: 'etech-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    console.log('in callback')
    this.authService.handleAuthentication()
  }

}
