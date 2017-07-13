import { Injectable } from '@angular/core';

import * as AWS from 'aws-sdk';

@Injectable()
export class Ec2Service {

  private ec2: any;
  private instanceId: any;
  

  constructor() {
    // Create EC2 service object
    this.ec2 = new AWS.EC2({apiVersion: '2016-11-15'});  
  }


  createInstance() {
    let params = {
      ImageId: 'ami-7802231d',
      InstanceType: 't2.micro',
      MinCount: 1,
      MaxCount: 1
    };
    // Create the instance
    this.ec2.runInstances(params, function(err, data) {
      if (err) {
          console.log("Could not create instance", err);
          return;
      }
      this.instanceId = data.Instances[0].InstanceId;
      console.log("Created instance", this.instanceId);
      // Add tags to the instance
      let params = {Resources: [this.instanceId], Tags: [
          {
            Key: 'Wordpress',
            Value: 'SDK Sample'
          }
      ]};
      this.ec2.createTags(params, function(err) {
          console.log("Tagging instance", err ? "failure" : "success");
      });
    });
  }

  describeInstance() {
    let params = {
      DryRun: false
    };
    this.ec2.describeInstances(params, function(err, data) {
      if (err) {
        console.log("Error", err.stack);
      } else {
        console.log("Success", JSON.stringify(data));
      }
    });
  }

  monitorInstances() {
    var params = {
      InstanceIds: [this.instanceId],
      DryRun: true
    };

    this.ec2.monitorInstances(params, function(err, data) {
      if (err && err.code === 'DryRunOperation') {
        params.DryRun = false;
        this.ec2.monitorInstances(params, function(err, data) {
            if (err) {
              console.log("Error", err);
            } else if (data) {
              console.log("Success", data.InstanceMonitorings);
            }
        });
      } else {
        console.log("You don't have permission to change instance monitoring.");
      }
    });
  }

  unmonitorInstances() {
      var params = {
        InstanceIds: [this.instanceId],
        DryRun: true
      };

      this.ec2.unmonitorInstances(params, function(err, data) {
      if (err && err.code === 'DryRunOperation') {
        params.DryRun = false;
        this.ec2.unmonitorInstances(params, function(err, data) {
            if (err) {
              console.log("Error", err);
            } else if (data) {
              console.log("Success", data.InstanceMonitorings);
            }
        });
      } else {
        console.log("You don't have permission to change instance monitoring.");
      }
    });
  }

  startInstances() {
    var params = {
      InstanceIds: [this.instanceId],
      DryRun: true
    };
    this.ec2.startInstances(params, function(err, data) {
      if (err && err.code === 'DryRunOperation') {
        params.DryRun = false;
        this.ec2.startInstances(params, function(err, data) {
            if (err) {
              console.log("Error", err);
            } else if (data) {
              console.log("Success", data.StartingInstances);
            }
        });
      } else {
        console.log("You don't have permission to start instances.");
      }
    });
  }

  stopInstances() {
    var params = {
      InstanceIds: [this.instanceId],
      DryRun: true
    };
    this.ec2.stopInstances(params, function(err, data) {
      if (err && err.code === 'DryRunOperation') {
        params.DryRun = false;
        this.ec2.stopInstances(params, function(err, data) {
            if (err) {
              console.log("Error", err);
            } else if (data) {
              console.log("Success", data.StoppingInstances);
            }
        });
      } else {
        console.log("You don't have permission to stop instances");
      }
    });
  }

  rebootInstances() {
    var params = {
      InstanceIds: ['INSTANCE_ID'],
      DryRun: true
    };

    this.ec2.rebootInstances(params, function(err, data) {
      if (err && err.code === 'DryRunOperation') {
        params.DryRun = false;
        this.ec2.rebootInstances(params, function(err, data) {
            if (err) {
              console.log("Error", err);
            } else if (data) {
              console.log("Success", data);
            }
        });
      } else {
        console.log("You don't have permission to reboot instances.");
      }
    });
  }

}
