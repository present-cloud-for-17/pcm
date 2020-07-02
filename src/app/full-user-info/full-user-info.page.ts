import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { school } from '../services/schoolInfo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-full-user-info',
  templateUrl: './full-user-info.page.html',
  styleUrls: ['./full-user-info.page.scss'],
})
export class FullUserInfoPage implements OnInit {

  constructor(public localStorage: LocalStorageService,
              public http: HttpClient,
              public router: Router) { }

  private uId : any;
  private sId : any;
  private peNumber : any;
  private peName : any;
  private gender : any;
  private grade : any;
  private major : any;
  private classes : any;
  private isTeacher : any;

  private getSelectSname : any;
  public majors: Array<string>;
  public schools : Array<school>;
  
  private httpOptions: any;
  private response : any;

  ngOnInit() {

    this.uId = this.localStorage.getItem('uId');
    this.getSchools();

  }
  getSchools()
  {
    this.httpOptions = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json', 
        'Accept': 'application/json', 
        'token': this.localStorage.getItem('token')})
    };
    this.http.get('http://175.24.88.62:8080/pcs/school/findAll.do', this.httpOptions)
    .subscribe(data => {
      this.schools = new Array<school>();
      this.schools = JSON.parse(JSON.stringify(data));
    }, function(error){console.log(error);});
  }
  checkGender(e){
    this.gender = e.detail.value;
  }
  getSchoolId(e){
    this.sId = e.detail.value;
    for(var i=0; i<this.schools.length; i++){
      if(this.schools[i].sId==this.sId){
        this.getSelectSname = this.schools[i].sName;
        break;
     }
    } 
    this.majors = new Array<string>();
    var k = 0;
    for(var i=0; i<this.schools.length; i++){
      if(this.schools[i].sName==this.getSelectSname){
        this.majors[k]=this.schools[i].major;
        k++;
      }
    }
  }
  getMajor(e){
    this.major = e.detail.value;
    var k = 0;
    for(var i=0; i<this.schools.length; i++){
      if(this.schools[i].major==this.major){
        this.sId = this.schools[i].sId;
        break;
      }
    }
  }
  getGrade(e){
    this.grade = e.detail.value;
    // console.log(this.grade);
  }
  getClasses(e){
    this.classes = e.detail.value;
  }
  checkRole(e) {
    this.isTeacher = e.detail.value;
  }
  savePerson(){
    this.http.post('http://175.24.88.62:8080/pcs/person/insert.do', 
    {uId:this.uId, sId:this.sId, peNumber:this.peNumber, peName:this.peName, gender:this.gender, 
      grade:this.grade, major:this.major, classes:this.classes, isTeacher:this.isTeacher},
    this.httpOptions) 
    .subscribe(response => {
      this.response=response;
      console.log(response);
      if(this.response!=null){
        this.localStorage.set('person', this.response);
        alert('提交成功!');
        this.router.navigateByUrl('/home');
      }
      else{
        alert('提交失败!');
      }
    }, function(error){console.log(error);});
  }
}
