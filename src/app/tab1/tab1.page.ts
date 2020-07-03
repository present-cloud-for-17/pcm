// import { COURSES } from './../mock/mock-courses';
import { personCourse } from '../services/personCourse';
import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from './component/popover/popover.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from '../services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  private segment: any;
  popover: any;
  private course : Array<personCourse>;
  public httpOptions:any;
  private person: any;
  private isTeacher :any;
  private peId: any;
  constructor(public popoverController: PopoverController, public http:HttpClient, public localStorage: LocalStorageService, public router: Router) {
    this.popover = null;
  }
  
  ngOnInit() {
    this.httpOptions = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json', 
        'Accept': 'application/json', 
        'token': this.localStorage.getItem('token')})
    };
    this.person = this.localStorage.getItem('person');
    this.isTeacher = this.person.isTeacher;
    this.peId = this.person.peId;
    this.clickcreate();
  }
  clickcreate() {

    if(this.isTeacher==0){
      this.course=null;
    }
    if(this.isTeacher==1){
      this.http.post('http://175.24.88.62:8080/pcs/personCourse/createdCourse.do',{peId:this.peId},this.httpOptions)
      .subscribe(data => {
        console.log(data);
        this.course = new Array<personCourse>();
        this.course = JSON.parse(JSON.stringify(data));
        console.log(this.course);
      },error => {console.log(error);});
    }
    this.segment = 1;
  }

  clickjoin() {

    if(this.isTeacher==0){
      this.http.post('http://175.24.88.62:8080/pcs/personCourse/createdCourse.do',{peId:this.peId},this.httpOptions)
      .subscribe(data => {
        console.log(data);
        this.course = new Array<personCourse>();
        this.course = JSON.parse(JSON.stringify(data));        
        console.log(this.course);
      },error => {console.log(error);});
    }
    if(this.isTeacher==1){
      this.course=null;
    }
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

  getSelectCourse(item: any){
    this.localStorage.set('selectCourse', item.cId);
    this.router.navigateByUrl('/class-tabs');
    // console.log(item);
  }

}
