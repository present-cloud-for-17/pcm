import { classInfo } from './../../../services/classInfo';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Component, OnInit, OnChanges, AfterViewInit } from '@angular/core';
import { isNull } from 'util';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Course } from 'src/app/services/Course';

@Component({
  selector: 'app-detail-class',
  templateUrl: './detail-class.page.html',
  styleUrls: ['./detail-class.page.scss'],
})
export class DetailClassPage implements OnInit {
  // private classInfo: classInfo = {
  //     classid: '',
  //     teachername: '',
  //     coursename: '',
  //     classname: '',
  //     semester: '',
  //     requirement: '',
  //     plan: '',
  //   };
  // private role: any;
  private selectCourse: any;
  public httpOptions: any;

  public cNumber: any;
  public cName: any;
  public description: any;
  public term: any;
  public date: any;
  public credit: any;
  public dailyWeight: any;
  public finalWeight: any;

  public course: Course;
  public isTeacher: any;

  private response: any;
  public person: any;

  constructor(private localService: LocalStorageService,
              private router: Router,
              public http: HttpClient) {
   }

  ngOnInit() {
    this.person = this.localService.getItem('person');
    this.isTeacher = this.person.isTeacher;
    this.selectCourse = this.localService.getItem('selectCourse');
    this.httpOptions = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json', 
        'Accept': 'application/json', 
        'token': this.localService.getItem('token')})
    };
    // console.log(this.selectCourse);
    this.http.post('http://175.24.88.62:8080/pcs/course/selectByPrimaryKey.do', {cId: this.selectCourse}, this.httpOptions)
      .subscribe(data =>{
        this.course = JSON.parse(JSON.stringify(data));  
        this.cNumber = this.course.cNumber;
        this.cName = this.course.cName;
        this.description = this.course.description;
        this.term = this.course.term;
        this.date = this.course.date;
        this.credit = this.course.date;
        this.dailyWeight = this.course.dailyWeight;
        this.finalWeight = this.course.finalWeight;
      },function(error){console.log(error);});

  }

  saveCourse(){
    // console.log(this.cName);
    this.http.post('http://175.24.88.62:8080/pcs/course/updateByPrimaryKey.do',
      {cId: this.selectCourse, cNumber: this.cNumber, description: this.description, cName: this.cName,
        term: this.term, date: this.date, credit: this.credit, dailyWeight: this.dailyWeight, finalWeight: this.finalWeight}
        ,this.httpOptions).subscribe(response=>{
          console.log(response);
          this.response=response;
          if(this.response==1){
            alert('保存成功!');
            // console.log(this.cName);
            this.router.navigateByUrl('/class-tabs');
          }
          else{
            alert('保存失败!');
          }
        },function(error){console.log(error);});
  }
  // saveClassInfo() {
  //   // this.localService.set('classInfo', this.classInfo);
  //   // this.router.navigateByUrl('/class-tabs');
  // }

}
