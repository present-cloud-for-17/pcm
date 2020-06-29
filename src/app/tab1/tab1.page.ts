import { COURSES } from './../mock/mock-courses';
import { Course } from './../services/course';
import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from './component/popover/popover.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  private segment: any = 1;
  popover: any;
  private course = COURSES;
  public httpOptions:any;
  constructor(public popoverController: PopoverController, public http:HttpClient) {
    this.popover = null;
  }
  clickcreate() {
    this.segment = 1;
    // this.http.get('http://175.24.88.62:8080/pcs/user/findAll.do')
    // .subscribe((response) => {
    //   var obj = eval("response");
    //   console.log(obj);
    //   console.log(response);});

    this.httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json;charset=UTF-8',
          'Accept': 'application/json'
        })};
    this.http.get('http://175.24.88.62:8080/pcs/user/findAll.do',this.httpOptions)
    .subscribe(data => {
      //数据赋值，将所有数据都安置到对应的框中
      var obj = eval("data"); //序列化代码
    },error => {
      console.log(error);
    });
  }
  clickjoin() {
    this.segment = 2;
  }
  async presentPop(e: any) {
    this.popover = await this.popoverController.create({
      component: PopoverComponent,
      event: e,
      translucent: true,
    });
    return await this.popover.present();
  }

}
