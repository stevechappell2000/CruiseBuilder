import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { Ng4JsonEditorModule } from 'angular4-jsoneditor';
import { FormioModule } from 'angular-formio';
import { AppComponent } from './app.component';
import { CruisejsonComponent } from './cruisejson/cruisejson.component';
import { CruisecodeComponent } from './cruisecode/cruisecode.component';
import { CodemirrorModule } from 'ng2-codemirror';
import { PluginsService } from './dataServices/plugins.service';
import { PluginsComponent } from './plugins/plugins.component';
import { GlobalvariablesComponent } from './globalvariables/globalvariables.component';
import { Cruises3Component } from './cruises3/cruises3.component';
import {TabsModule} from "ngx-tabs";
import { CruiseformComponent } from './cruiseform/cruiseform.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    CruisejsonComponent,
    CruisecodeComponent,
    CruiseformComponent,
    Cruises3Component,
    PluginsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng4JsonEditorModule, 
    CodemirrorModule,
    TabsModule,
    FormioModule,MatCardModule
  ],
  providers: [PluginsService, Cruises3Component, GlobalvariablesComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
    
}
