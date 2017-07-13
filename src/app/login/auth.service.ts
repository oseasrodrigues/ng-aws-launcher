import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';

import { Credentials } from './credentials';
import * as AWS from 'aws-sdk';


@Injectable()
export class AuthService {

  private userAuthenticated: boolean = false;

  enableLogoutEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  login(ngCredentials: Credentials){

    if (ngCredentials.accessKeyId === ngCredentials.accessKeyId && 
      ngCredentials.secretAccessKey === ngCredentials.secretAccessKey) {

      AWS.config.region = 'eu-west-1';
      AWS.config.sslEnabled = false;
      AWS.config.credentials = new AWS.Credentials({
          accessKeyId: ngCredentials.accessKeyId,
          secretAccessKey: ngCredentials.secretAccessKey,
      });

      this.userAuthenticated = true;

      this.enableLogoutEmitter.emit(true);

      this.router.navigate(['/services']);

    } else {
      this.userAuthenticated = false;

      this.enableLogoutEmitter.emit(false);
    }
  }

  logout() {
    //logout from AWS
    this.userAuthenticated = false;
    this.enableLogoutEmitter.emit(false);
  }

  isUserAuthenticated(){
    return this.userAuthenticated;
  }

}
