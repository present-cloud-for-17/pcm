import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-full-user-info',
  templateUrl: './full-user-info.page.html',
  styleUrls: ['./full-user-info.page.scss'],
})
export class FullUserInfoPage implements OnInit {

  constructor(public localStorage: LocalStorageService, public http: HttpClient) { }

  private uId : any;
  private sId : any;
  private peNumber : any;
  private peName : any;
  private gender : any;
  private grade : any;
  private major : any;
  private classes : any;
  private isTeacher : any;
  // private token :any;
  private httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json', 
        'Accept': 'application/json', 
        'Authorization': 'wangzhewen' + this.localStorage.getItem("token")
      })
  };
  // private httpOptions: any;
  // private headers = new HttpHeaders({'Content-Type': 'application/json', 
  // 'Accept': 'application/json'});
  
  // private schools :any = {
  //   id : '1',
  //   name : '1',
  // };

  ngOnInit() {
    // this.respondeData = localStorage.getItem('response');
    this.uId = this.localStorage.getItem('uId');
    // this.token = this.localStorage.getItem('token');
    // this.headers.append('Authorization', 'wzw'+ this.token);
    console.log(this.httpOptions);
    // this.httpOptions = {
    //   headers: new HttpHeaders({ 
    //     'Content-Type': 'application/json', 
    //     'Accept': 'application/json', 
    //     "Authorization": 'wangzhewen' + this.token})
    // };
    this.getSchools();
    // console.log(this.uId);
    // console.log(this.token);
  }
  getSchools()
  {
    this.http.get('http://175.24.88.62:8080/pcs/school/findAll.do', this.httpOptions)
    .subscribe(schools => {
      console.log(schools);
                  // console.log(response); 
    }, function(error){console.log(error);});
  }
  checkGender(e){
    this.gender = e.detail.value;
  }
  getSchoolId(e){
    this.sId = e.detail.value;
  }
  getMajor(e){
    this.major = e.detail.value;
  }
  getGrade(e){
    this.grade = e.detail.value;
  }
  checkRole(e) {
    this.isTeacher = e.detail.value;
  }
}
