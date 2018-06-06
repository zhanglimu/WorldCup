import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule,BrowserXhr} from '@angular/http';
import { AppComponent }  from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ElModule } from 'element-angular';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { OrdersComponent } from './orders/orders.component';
import { InterfaceService} from './service/interface.service';

import {HashLocationStrategy, LocationStrategy} from '@angular/common';

//路由配置方法
export const ROUTES : Routes =[
  {path: '', pathMatch:'full', redirectTo:'orders'}, //默认访问页面
  {path :'orders', component:OrdersComponent},
  
]
//引用文件
@NgModule({
  imports: [
    BrowserModule, 
    FormsModule, 
    BrowserAnimationsModule,
    ElModule.forRoot(),
    HttpModule,
    RouterModule.forRoot(ROUTES),
    LoadingModule.forRoot({
      animationType: ANIMATION_TYPES.wanderingCubes,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)', 
      backdropBorderRadius: '4px',
      primaryColour: '#ffffff', 
      secondaryColour: '#ffffff', 
      tertiaryColour: '#ffffff'
  }),
  NgCircleProgressModule.forRoot({
    radius: 100,
    outerStrokeWidth: 16,
    innerStrokeWidth: 8,
    outerStrokeColor: "#78C000",
    innerStrokeColor: "#C7E596",
    animationDuration: 300
})
  ],
  declarations: [
    AppComponent, 
    OrdersComponent,
  ],
  providers: [
    InterfaceService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
 
})

export class AppModule { }
