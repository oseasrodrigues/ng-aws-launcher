import { MaterializeModule } from 'angular2-materialize';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AwsService} from './services/aws.service';
import { Ec2Component } from './services/ec2/ec2.component';
import { AuthService } from './login/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    HomeComponent,
    LoginComponent,
    Ec2Component
  ],
  imports: [
    MaterializeModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    AwsService,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
