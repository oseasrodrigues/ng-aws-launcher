import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth.service';
import { Credentials } from './credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private ngCredentials: Credentials = new Credentials();

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
     this.authService.login(this.ngCredentials);
  }

}
