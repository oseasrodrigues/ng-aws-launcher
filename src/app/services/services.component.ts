import { Component, OnInit } from '@angular/core';

import { AwsService} from './aws.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  providers: [AwsService]
})
export class ServicesComponent implements OnInit {

  services: string[] = [];

  constructor(private awsService: AwsService) { }

  ngOnInit() {
    this.services = this.awsService.getAwsServices();
  }

}
