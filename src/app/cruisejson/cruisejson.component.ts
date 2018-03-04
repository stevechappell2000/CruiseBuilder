import { Component, OnInit, ViewChild, CUSTOM_ELEMENTS_SCHEMA, HostBinding} from '@angular/core';
import { PluginsService } from '../dataServices/plugins.service';
import { Cruises3Component } from '../cruises3/cruises3.component';
import { JsonEditorComponent, JsonEditorOptions, JsonEditorTreeNode } from 'angular4-jsoneditor/jsoneditor/jsoneditor.component';
import { GlobalvariablesComponent } from '../globalvariables/globalvariables.component';
import { HttpParams } from '@angular/common/http';
import { FormioComponent } from 'angular-formio/formio.component';
//import { CruisejsonComponent } from '../cruisejson/cruisejson.component';
//@ViewChild('CruiseForm') public formio: CruisejsonComponent;
@Component({
  selector: 'app-cruisejson',
  templateUrl: './cruisejson.component.html',
  styleUrls: ['./cruisejson.component.css']
})
export class CruisejsonComponent implements OnInit {
    @ViewChild('JsonEditorComponent') public json: JsonEditorComponent;
    public editorOptions: JsonEditorOptions;
    public data: any;
    @ViewChild(JsonEditorComponent) editor: JsonEditorComponent;
    
    constructor(private _httpPlugin: PluginsService, private _cruises3: Cruises3Component, private globals: GlobalvariablesComponent) { 
      this.editorOptions = new JsonEditorOptions()
      this.editorOptions.modes = ['code', 'text', 'tree', 'view']; // set all allowed modes
      //this.options.mode = 'code'; //set only one mode
      this.data = globals.form;
      }

  ngOnInit() {
      this.globals.jsonEditor = this.json;
  }
  doLoadForm(){
     this.globals.form = this.json.get();
  }



    doUpdateObject(event: any){
        this.globals.objectName = event.target.value;
    }
    doLoadObject(event: any){
        this.globals.objectLoad.services[0].parameters.bucketName = this.globals.bucketName;
        this.globals.objectLoad.services[0].parameters.objectName = this.globals.objectName;
        //console.log(JSON.stringify(this.gv.objectLoad, null, 4));
        this.data = this._httpPlugin.doPOST(this.globals.objectLoad).then(data => {
            let rootName = this.globals.objectLoad.services[0].parameters.service+".s3GetString";
            //let len = data[rootName].length;
            let o = JSON.parse(data[rootName].object);
            //let p = o['parameters'];
           // let s = o['services'];
            //let c = o['credentials'];
            //this.postApp = new application(p);//p.name, p.id)
            //console.log("name:"+c.parameters.username);
            //this.postApp.credentials = new credentials(c['parameters']);

            this.json.set(JSON.parse(JSON.stringify(o)));
          });
    }
    doSaveObject(event: any){
        this.globals.objectSave.services[0].parameters.object = JSON.stringify(this.json.get());
        this.globals.objectSave.services[0].parameters.bucketName = this.globals.bucketName;
        this.globals.objectSave.services[0].parameters.objectName = this.globals.objectName;
        //console.log(JSON.stringify(this.gv.objectSave, null, 4));
        this.data = this._httpPlugin.doPOST(this.globals.objectSave).then(data => {
            //this.jsonData = (JSON.stringify(data, null, 4));
           
        });
    }

}
