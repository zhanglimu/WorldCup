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
    constructor(private router:Router,private QUERY: InterfaceService,private message: ElMessageService) { 
      this.showscale=false;
      this.hidescale=false;

      // this.interval = setInterval(() => {
        this.QUERY.bar().subscribe(data => {
          this.jindu =data.invest;
          var num=((Number(data.invest)/85000000)*100).toFixed(2)
          this.baifen=num;
          this.payoutrate =data.payoutrate;
          if(data.payoutrate<=7.5){
            console.log("111")
            this.showscale=true;
          }else{
            this.hidescale=true;
          }
        })
      // }, 30000);
      
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
        var num=((Number(data.invest)/85000000)*100).toFixed(2)
        this.baifen=num;
        this.payoutrate =data.payoutrate;
        if(data.payoutrate<=7.5){
          console.log("222")
          this.showscale=true;
        }else{
          this.hidescale=true;
        }
      })
    }, 30000);
  }

}