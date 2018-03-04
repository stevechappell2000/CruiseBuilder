import { Component, OnInit, ViewChild, CUSTOM_ELEMENTS_SCHEMA, HostBinding} from '@angular/core';
import { PluginsService } from '../dataServices/plugins.service';
import { Cruises3Component } from '../cruises3/cruises3.component';
import { JsonEditorComponent, JsonEditorOptions, JsonEditorTreeNode } from 'angular4-jsoneditor/jsoneditor/jsoneditor.component';
import { GlobalvariablesComponent } from '../globalvariables/globalvariables.component';
import { HttpParams } from '@angular/common/http';
import { FormioModule } from 'angular-formio';
import { CruisejsonComponent } from '../cruisejson/cruisejson.component';
@Component({
  selector: 'app-cruiseform',
  templateUrl: './cruiseform.component.html',
  styleUrls: ['./cruiseform.component.scss']
})
export class CruiseformComponent implements OnInit {
@ViewChild('JsonEditor') public JsonEditor: CruisejsonComponent;
public formio: FormioModule;
  public form = {};
  constructor(private _httpPlugin: PluginsService, private _cruises3: Cruises3Component, private gv: GlobalvariablesComponent) { 
      this.form = gv.form;
  }

  ngOnInit() {
      //this.JsonEditor.data = this.form;
  }
  onSubmit(submission: any){
      //console.log(submission);
      console.log(JSON.stringify(submission['data'],null,4));
  }
}
