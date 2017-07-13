import { TestBed, inject } from '@angular/core/testing';

import { Ec2Service } from './ec2.service';

describe('Ec2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Ec2Service]
    });
  });

  it('should be created', inject([Ec2Service], (service: Ec2Service) => {
    expect(service).toBeTruthy();
  }));
});
