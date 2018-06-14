import { Component, OnInit} from '@angular/core';
import { Http } from '@angular/http'; // (1)
import 'rxjs/add/operator/map'; // (2)
import{ Router} from '@angular/router';
import { ElMessageService } from 'element-angular';
import { AppConfig } from "../const/app-config";
import { InterfaceService} from '../service/interface.service';
import { LiveOrdermanage } from '../modules/ordermanage';
import * as $ from "jquery";
import { element } from 'protractor';

interface Member {
    id: string;
    login: string;
    avatar_url: string;
}

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.scss'],
  })
export class OrdersComponent implements OnInit {  
    jindu:string;
    baifen:string;
    payoutrate:string;
    showscale:boolean;
    hidescale:boolean;
    private interval;
    ss:string;
    constructor(private router:Router,private QUERY: InterfaceService,private message: ElMessageService) { 
      this.showscale=false;
      this.hidescale=false;

        this.QUERY.bar().subscribe(data => {
          this.jindu =data.invest;
          this.ss=data.invest;
          var lastIndex = this.ss.replace(/,/g,"");
          var num=((Number(lastIndex)/85000000)*100).toFixed(2)
          this.baifen=num;
          this.payoutrate =data.payoutrate;
          if(data.payoutrate<=7.5){
            this.showscale=true;
            this.hidescale=false;
          }else{
            this.hidescale=true;
            this.showscale=false;
          }
        })
      
    }
/**
   * 切换选项卡
   * @param index
   */
  switch(index: string): void {
    this.jindu=null;
    this.payoutrate=null;
  }
  ngOnInit() {
    this.interval = setInterval(() => {
      this.QUERY.bar().subscribe(data => {
        this.jindu =data.invest;
        this.ss=data.invest;
        // var lastIndex = this.ss.lastIndexOf(',');
        var lastIndex = this.ss.replace(/,/g,"");
        // console.log(lastIndex);
        // if (lastIndex > -1) {
        //   this.ss = this.ss.substring(0, lastIndex) + this.ss.substring(lastIndex + 1, data.invest.length);
        //  }
        var num=((Number(lastIndex)/85000000)*100).toFixed(2)
        this.baifen=num;
        this.payoutrate =data.payoutrate;
        if(data.payoutrate<=7.5){
          this.showscale=true;
          this.hidescale=false;
        }
        // if(data.payoutrate>=7.5){
        //   this.hidescale=true;
        //   this.showscale=false;
        // }
        else{
          this.hidescale=true;
          this.showscale=false;
        }
      })
    }, 30000);
  }

}