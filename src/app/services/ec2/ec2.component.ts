import { Component, OnInit } from '@angular/core';

import { Ec2Service } from './ec2.service';

@Component({
  selector: 'app-ec2',
  templateUrl: './ec2.component.html',
  styleUrls: ['./ec2.component.css']
})
export class Ec2Component implements OnInit {

  constructor(private ec2Service: Ec2Service) { }

  ngOnInit() {
    this.ec2Service.createInstance();
    this.ec2Service.describeInstance();
  }

  start() {
     this.ec2Service.startInstances();
  }

  stop() {
     this.ec2Service.stopInstances();
  }

}
