import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '@etech/shared'

@Component({
  selector: 'etech-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.authService.login()
  }

}
