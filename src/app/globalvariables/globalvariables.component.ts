import { Component, OnInit } from '@angular/core';
import { PluginsService } from '../dataServices/plugins.service';
import { JsonEditorComponent, JsonEditorOptions, JsonEditorTreeNode } from 'angular4-jsoneditor/jsoneditor/jsoneditor.component';
@Component({
  selector: 'app-globalvariables',
  templateUrl: './globalvariables.component.html',
  styleUrls: ['./globalvariables.component.css']
})
export class GlobalvariablesComponent implements OnInit {
     //'http://localhost:8079/Cruise';
    //'http://server.cruiseapi.net/Cruise';
    //'https://0j0b9hki27.execute-api.us-west-2.amazonaws.com/test';
    private engineURL: string = 'https://0j0b9hki27.execute-api.us-west-2.amazonaws.com/test';
                                 //https://0j0b9hki27.execute-api.us-west-2.amazonaws.com/test
    public bucketName:string  = "Unselected";
    public objectName: string = "Unselected";
    public region = 'us-west-2';
    public currentService: any;
    public applicationName = "CruiseDirector";
    public applicationId = "Generated";
    public object: any;
    public attachThis = "Samples/SelectOneCustomerRemote";
    public jsonEditor: JsonEditorComponent;
    public services: any;
    public attach = {
            "parameters": {
                "name": "CruiseDirector",
                "id": "Generated"
              },
              "services": [
                {
                  "parameters": {
                    "pluginName": "CruiseS3",
                    "action": "attachService",
                    "attach": this.attachThis,
                    "service": "~UUID",
                    "connectionName": "CruiseS3",
                    "bucketName": "cruisesamplebucket",
                    "cache": "true"
                  }
                }
              ],
              "credentials": {
                "parameters": {
                  "username": "admin",
                  "password": "admin",
                  "comment": "this is a dummy credential"
                }
              }
            };
    public initPluginSend = {
            "parameters" : {
              "name" : this.applicationName,
              "id" : this.applicationId
            },
            "credentials" : {
              "parameters" : {
                "password" : "admin",
                "username" : "admin"
              }
            },
            "services" : [
                  {"parameters" : {
                      "pluginName" : "CruiseCorePlugin",
                      "service":"SomeService",
                      "action" : "plugInInfo"
                   }
                  }
              ]
            };
    public customSend = {
          "parameters" : {
              "name" : this.applicationName,
              "id" : this.applicationId
            },
            "credentials" : {
              "parameters" : {
                "password" : "admin",
                "username" : "admin"
              }
            },
            "services" : [
                  {"parameters" : {
                      "pluginName" : "CruiseCorePlugin",
                      "service":"SomeService",
                      "action" : "plugInInfo"
                   }
                  }
              ]
            };

    public initSend = {
            "parameters" : {
                "name" : this.applicationName,
                "id" : this.applicationId
            },
            "credentials" : {
              "parameters" : {
                "password" : "admin",
                "username" : "admin"
              }
            },
            "services" : [
                  {"parameters" : {
                      "pluginName" : "CruiseS3",
                      "service":"CruiseS3Connect",
                      "connectionName":"CruiseS3",
                      "region": this.region,
                      "action" : "s3Connect"
                   }
                  },
                  {"parameters" : {
                      "pluginName" : "CruiseS3",
                      "service":"BucketLoadList",
                      "connectionName":"CruiseS3",
                      "action" : "s3ListBuckets"
                   }
                  }
              ]
            };
    public initFileList = {
        "parameters" : {
            "name" : this.applicationName,
            "id" : this.applicationId
        },
        "credentials" : {
          "parameters" : {
            "password" : "admin",
            "username" : "admin"
          }
        },
        "services" : [
              {"parameters" : {
                  "pluginName" : "CruiseS3",
                  "service":"BucketLoadList",
                  "connectionName":"CruiseS3",
                  "action" : "s3ListAllFiles",
                  "bucketName": "unknown"
               }
              }
          ]
        }; 
    public objectSave = {
            "parameters" : {
                "name" : this.applicationName,
                "id" : this.applicationId
            },
            "credentials" : {
              "parameters" : {
                "password" : "admin",
                "username" : "admin"
              }
            },
            "services" : [
                  {"parameters" : {
                      "pluginName" : "CruiseS3",
                      "service":"SaveObject",
                      "connectionName":"CruiseS3",
                      "action" : "s3PutString",
                      "bucketName": this.bucketName,
                      "object": this.object,
                      "objectName": this.objectName
                      
                   }
                  }
              ]
            };
    public objectDelete = {
            "parameters" : {
                "name" : this.applicationName,
                "id" : this.applicationId
            },
            "credentials" : {
              "parameters" : {
                "password" : "admin",
                "username" : "admin"
              }
            },
            "services" : [
                  {"parameters" : {
                      "pluginName" : "CruiseS3",
                      "service":"DeleteObject",
                      "connectionName":"CruiseS3",
                      "action" : "s3DeleteObject",
                      "bucketName": this.bucketName,
                      "object": this.object,
                      "objectName": this.objectName
                      
                   }
                  }
              ]
            };
    public objectLoad = {
            "parameters" : {
                "name" : this.applicationName,
                "id" : this.applicationId
            },
            "credentials" : {
              "parameters" : {
                "password" : "admin",
                "username" : "admin"
              }
            },
            "services" : [
                  {"parameters" : {
                      "pluginName" : "CruiseS3",
                      "service":"LoadObject",
                      "connectionName":"CruiseS3",
                      "action" : "s3GetString",
                      "bucketName": this.bucketName,
                      "objectName": this.objectName
                      
                   }
                  }
              ]
            };
    
    
    public form = { };

  constructor(public pluginService: PluginsService) { 

  }
  
  ngOnInit() {

  }
  GetEngineURL(){
      return this.engineURL;
  }
  SetEngineURL(inURL: string){
      this.engineURL = inURL;
  }
  post(attachThisFile: string, result: any, retFunction: any){
      
      this.attach.services[0].parameters.attach = attachThisFile;
      
      var temp = this.pluginService.doPOST(this.attach).then(data => {
         
      });
  }
  removeOddChars(strValue){
      
      strValue = strValue.replace(/\\n/g, '\n');
      //strValue = strValue.replace(/&nbsp;/g ,' ');
      //strValue = strValue.replace(/&gt;/g, '>');
      //strValue = strValue.replace(/&lt;/g, '<');
      //strValue = strValue.replace(/&amp;/g, '&');
      //console.log("((((((((((("+strValue+"))))))))))))))");
      return strValue;
  }

}
