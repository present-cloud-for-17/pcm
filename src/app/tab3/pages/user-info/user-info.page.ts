import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Router } from '@angular/router';
import { isNull } from 'util';
import { school } from 'src/app/services/schoolInfo';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.page.html',
  styleUrls: ['./user-info.page.scss'],
})
export class UserInfoPage implements OnInit {
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
  
  private person: any;
  private httpOptions: any;
  private response : any;
  constructor(private localStorage: LocalStorageService,
              private router: Router,
              public http: HttpClient) { }

  ngOnInit() {

    this.uId = this.localStorage.getItem('uId');
    this.person = this.localStorage.getItem('person');
    this.peNumber = this.person.peNumber;
    this.peName = this.person.peName;
    this.gender = this.person.gender;
    this.grade = this.person.grade;
    this.major = this.person.major;
    this.classes = this.person.classes;
    this.sId = this.person.sId;
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

  savePerson(){
    this.person.sId = this.sId;
    this.person.peNumber = this.peNumber;
    this.person.peName = this.peName;
    this.person.grade = this.grade;
    this.person.major = this.major;
    this.person.classes = this.classes;
    this.person.gender = this.gender;
    this.http.post('http://175.24.88.62:8080/pcs/person/updateByPrimaryKey.do', 
    {peId: this.person.peId, sId:this.sId, peNumber:this.peNumber, peName:this.peName, gender:this.gender, 
      grade:this.grade, major:this.major, classes:this.classes},
    this.httpOptions) 
    .subscribe(response => {
      this.response=response;
      console.log(response);
      if(this.response!=null){
        this.localStorage.set('person', this.person);
        alert('修改成功!');
        this.router.navigateByUrl('/home');
      }
      else{
        alert('修改失败!');
      }
    }, function(error){console.log(error);});
  }
  

}
