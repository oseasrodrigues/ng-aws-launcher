import { Injectable } from '@angular/core';


@Injectable() 
export class AwsService {


    private awsServices: string[] = ['EC2'];

    constructor(){
        console.log('AwsServices');
    }

    getAwsServices() {
        return this.awsServices;
    }

    addAwsService(service: string){
        this.awsServices.push(service);
    }
}