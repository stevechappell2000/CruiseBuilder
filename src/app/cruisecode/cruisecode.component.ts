import { Component, OnInit, ViewChild } from '@angular/core';
import { CodeMirror } from 'codemirror';
import { GlobalvariablesComponent } from '../globalvariables/globalvariables.component';
import { PluginsService } from '../dataServices/plugins.service';
import 'codemirror/mode/javascript/javascript.js';

@Component({
  selector: 'app-cruisecode',
  templateUrl: './cruisecode.component.html',
  styleUrls: ['./cruisecode.component.css']
})
export class CruisecodeComponent implements OnInit {

    public config = { 
            lineNumbers: true,
            lineWrapping: false,
            width: '100%',
            height: '100%',
            //theme: 'eclipse',
            lineSeparator:'\n',
            mode: 'javascript'
    };
    
    private jsConfig = this.config;
    private cssConfig = this.config;
    private executeCode = {
            "parameters" : {
                "name" : "CruiseDirectorScript",
                "id" : "CruiseDirectorScript"
              },
              "credentials" : {
                "parameters" : {
                  "password" : "admin",
                  "username" : "admin"
                }
              },
              "services" : [
                            { "parameters": {
                                "pluginName": "CruiseJS",
                                "action": "RunScript",
                                "service": "scriptInsert",
                                "Script": ""
                            }
                        }
                ]
              };
    public value = "//Cruise Code Window";

    @ViewChild('editor') editor: any;
    constructor(private _httpPlugin: PluginsService, private gv: GlobalvariablesComponent) {
        this.cssConfig.mode = 'javascript';
    }

    ngOnInit() {
        console.log("INIT");
        console.log(this.editor);
        //this.editor.updateValue("hello world");
    }
    getEditor(){
        return this.editor;
    }
    onBlur(){
        console.log("Code Component blur");
    }
    onChange(editorEvent: CodeMirror){
        //console.log("CHANGE!!!!!!!!!!!!!!!!!!!!!!!");
        //let cm = editorEvent.instance;
        //setTimeout(function() {
        //    cm.refresh();
        //    cm.setSize('100%', '100%');
        //    let posCursor = {line: 0, ch: 0};
        ///    posCursor.line = cm.doc.children[0].lines.length-1;
        //    posCursor.ch = cm.doc.children[0].lines[posCursor.line].text.length;
        //    cm.doc.setCursor(posCursor);
        //}, 50); 
    }
    onFocus(editorEvent: CodeMirror){
        console.log("FOCUS");
        let cm = editorEvent.instance;
        console.log(cm.doc.children[0]);
        setTimeout(function() {
            cm.refresh();
            cm.setSize('100%', '100%');
            let posCursor = {line: 0, ch: 0};
            try{posCursor.line = cm.doc.children[0].lines.length-1;}catch(e){}
            try{posCursor.ch = cm.doc.children[0].lines[posCursor.line].text.length;}catch(e){}
            try{cm.doc.setCursor(posCursor);}catch(e){}
        }, 300); 
    }
    setValue(inCode: any){
        this.editor.instance.doc.setValue(this.gv.removeOddChars(inCode));
    }
    formatCode(){
        this.editor.instance.doc.setValue(this.gv.removeOddChars(this.editor.instance.doc.getValue()));
        //this.editor.instance.doc.setValue( this.removeOddChars(this.editor.instance.doc.getValue()));

    }
    runInjectedCode(event: any){
        this.executeCode.services[0].parameters.Script = this.editor.instance.doc.getValue();
        var target = this.gv.jsonEditor.get();
        target["services"].push(this.executeCode.services[0]);
        
        var mydata = this._httpPlugin.doPOST(target).then(data => {
            //this.data = data;
            console.log(JSON.stringify(data, null, 4));
        });
    }
    appendInjectedCode(event: any){
        this.executeCode.services[0].parameters.Script = this.editor.instance.doc.getValue();
        var target = this.gv.jsonEditor.get();
        target["services"].push(this.executeCode.services[0]);
        this.gv.jsonEditor.set(target);
    }
    runCode(event: any){
        console.log("runEvent");
        this.executeCode.services[0].parameters.Script = this.editor.instance.doc.getValue();
        var mydata = this._httpPlugin.doPOST(this.executeCode).then(data => {
            //this.data = data;
            console.log(JSON.stringify(data, null, 4));
        });
      //}
    }

}
