import { Component, OnInit } from '@angular/core';
import { Local } from 'protractor/built/driverProviders';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Course } from 'src/app/services/Course';

@Component({
  selector: 'app-setup-class',
  templateUrl: './setup-class.page.html',
  styleUrls: ['./setup-class.page.scss'],
})
export class SetupClassPage implements OnInit {

  constructor(public localStorage:LocalStorageService, public http:HttpClient, public router: Router) { }

  private cId: any;
  private cNumber: any;
  private cName: any;
  private description: any;
  private term: any;
  private date: any;
  private credit: any;
  private dailyWeight: any;
  private finalWeight: any;

  private httpOptions: any;
  private isTeacher: any;
  private response: any;
  private person: any;

  private createCourse: Course;
  ngOnInit() {
    this.person = this.localStorage.getItem('person');
    // console.log(this.person.peName, this.person.peNumber);
    this.isTeacher = this.person.isTeacher;
    this.httpOptions = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json', 
        'Accept': 'application/json', 
        'token': this.localStorage.getItem('token')})
    };
  }
  async saveCourse(){

    if(this.isTeacher==0)
    {
      alert('学生无访问权限!');
      this.router.navigateByUrl('/home');
    }
    if(this.isTeacher==1)
    {
      let dataCourse = await this.insertCourse();
      let JdataCourse = JSON.parse(JSON.stringify(dataCourse));
      if(JdataCourse.cId!=null)
      {
        this.cId = JdataCourse.cId;
        alert('创建成功!');
      }
      else
      {
        alert('创建失败!');
      }
      let personCourse = await this.insertPerCou();
      if(JSON.parse(JSON.stringify(personCourse))==1)
      {
        console.log('教师-课程表插入成功!');
        this.router.navigateByUrl('/home');
      }
      else
      {
        console.log('教师-课程表插入失败!');
      }
    }
  }
  insertCourse()
  {
    let dataCourse = this.http.post('http://175.24.88.62:8080/pcs/course/insert.do',
        {cNumber: this.cNumber, cName: this.cName, description: this.description, term: this.term,
        date: this.date, credit: this.credit, dailyWeight: this.dailyWeight, finalWeight: this.finalWeight},
        this.httpOptions).toPromise();
    return dataCourse;
  }

  insertPerCou()
  {
    console.log(this.person.peName, this.person.peNumber);
    let personCourse = this.http.post('http://175.24.88.62:8080/pcs/personCourse/insert.do',
      {peId: this.person.peId, cId: this.cId, value: 0, status: 1, cName: this.cName, 
        term: this.term, peNumber: this.person.peNumber, peName: this.person.peName},
      this.httpOptions).toPromise();
      return personCourse;
  }
  
}
