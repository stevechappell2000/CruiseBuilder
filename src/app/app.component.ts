import { Component, OnInit, ViewChild } from '@angular/core';
import { PluginsService } from './dataServices/plugins.service';
import { GlobalvariablesComponent } from './globalvariables/globalvariables.component';
import {TabsModule} from "ngx-tabs";
import { CruiseformComponent } from './cruiseform/cruiseform.component';
import { CruisecodeComponent } from './cruisecode/cruisecode.component';
import { services } from './utils/services';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  @ViewChild('CruiseForm') public CruiseForm: CruiseformComponent;
  @ViewChild('cruiseCode') public CruiseCode: CruisecodeComponent;
   constructor(private pluginService: PluginsService, public globals: GlobalvariablesComponent) {
      pluginService.LastURL = globals.GetEngineURL();
      console.log(pluginService.LastURL);
  }
  ngOnInit() {
      console.log("INIT APP");
      console.log(this.CruiseForm.form)
      //console.log(this.editor);
      //this.editor.value = (JSON.stringify(this.form,null,4));
      //this.editor.setSize('100%', '100%');
      //this.editor.onFocus(this.editor);
      //this.editor.updateValue("hello world");
  }
  onJsonLoaded(event: services[]){
      console.log("Reached JsonLoaded");
      console.log(event);

      for(var i=0;i<event.length;i++){
          console.log(event[i]['parameters']["pluginName"]);
          if(event[i]['parameters']["pluginName"] == "CruiseJS"){
             this.CruiseCode.setValue(event[i]['parameters']['Script']);
          }
      }
      
  }
}
