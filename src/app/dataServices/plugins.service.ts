import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { GlobalvariablesComponent } from '../globalvariables/globalvariables.component';
@Injectable()
export class PluginsService {
    PlugInData;
    public LastURL: string;

    constructor(private _http: HttpClient) {
        //this.LastURL = gv.GetEngineURL();
        //console.log('Constructor PluginsService:'+this.LastURL);
    }
    getPlugin(URL: string, params) {
        // 'http://localhost:8079/CuiseSite/Cruiselet?TableName=testtable'
        this.LastURL = URL;
        //console.log('FetchData PluginsService');
        this._http.get(URL, params).subscribe(data => {
            this.PlugInData = data;
            console.log(JSON.stringify(data));
            console.log(data);
            return data;
        });
        
    }
    setCruiseEngine(inURL: string){
        this.LastURL = inURL;
    }
    doGET() {
        /*console.log("GET:"+this.LastURL);
        let url = `${this.LastURL}`;
        return this._http.get(url).retry(3).subscribe(res => {
            console.log("Hello:"+res)
            return res;
        },
        (err: HttpErrorResponse) => {
            if (err.error instanceof Error) {
              // A client-side or network error occurred. Handle it accordingly.
              console.log('An error occurred:', err.error.message);
            } else {
              // The backend returned an unsuccessful response code.
              // The response body may contain clues as to what went wrong,
              console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
            }
        });*/
        let url = `${this.LastURL}`;
        return new Promise(resolve => {
            this._http.get(url).subscribe(data => {
              resolve(data);
            }, err => {
              console.log(err);
            });
          });
    }
    
    doPOST(Application) {
        
        let url = `${this.LastURL}`;
        
        let body = JSON.stringify(Application);
       // console.log("POSTING:"+body);
        
       // let headers: {
       //     "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
       //     "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS 
       //   };
      //const myheaders = new HttpHeaders({"Access-Control-Allow-Origin" : "*", "Access-Control-Allow-Credentials" : "true", "Content-Type" : "application/json"});
          //headers.set("Content-Type", "application/json");

          //headers.set("Access-Control-Allow-Origin", "*");
          //headers.put("Access-Control-Allow-Credentials", "true");
        //  let options = new RequestOptions({ headers: headers });
        
        
        /*let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        
        
        this._http.post(url, body).subscribe(res => {
            console.log("Hello:"+res)
            return res;
        },
        (err: HttpErrorResponse) => {
            if (err.error instanceof Error) {
              // A client-side or network error occurred. Handle it accordingly.
              console.log('An error occurred:', err.error.message);
            } else {
              // The backend returned an unsuccessful response code.
              // The response body may contain clues as to what went wrong,
              console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
            }
        });*/
        //console.log(body);
        return new Promise(resolve => {
            //this._http.post(url, body, {headers: myheaders}).subscribe(data => {
            this._http.post(url, body).subscribe(data => {
              resolve(data);
            }, err => {
              console.log(err);
            });
          });
    }
    
    doPUT() {
        console.log("PUT");
    }
    
    doDELETE() {
        console.log("DELETE");
    }
    
    doGETAsPromise() {
        console.log("GET AS PROMISE");
    }
    
    doGETAsPromiseError() {
        console.log("GET AS PROMISE ERROR");
    }
    
    doGETAsObservableError() {
        console.log("GET AS OBSERVABLE ERROR");
    }
    
    doGETWithHeaders() {
        console.log("GET WITH HEADERS");
    }
}
