import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {AppConfig} from "../const/app-config";
import { AppComponent } from '../app.component';
import 'rxjs/add/observable/forkJoin';
import {Observable} from "rxjs/Observable";
import {HttpParams} from "@angular/common/http";
import { connect } from 'tls';
@Injectable()
export class InterfaceService{
    param : any;
    constructor(private http:Http){}
    bar(){
        console.log(AppConfig.baseUrl+'/account/getGrashByTime')
        return this.http.get(AppConfig.baseUrl+'/account/getGrashByTime')
        .map(res=>res.json());
    }
}   