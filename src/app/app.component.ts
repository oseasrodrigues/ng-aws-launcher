import { Component } from '@angular/core';

import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  enableLogout: boolean = false;

  constructor(private authService: AuthService) {

  }

  ngOnInit(){
    this.authService.enableLogoutEmitter.subscribe(
      enable => this.enableLogout = enable
    );
  }
  
}
