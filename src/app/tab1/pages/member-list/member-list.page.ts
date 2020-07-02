import { NavController } from '@ionic/angular';
import { Component, OnInit, OnChanges } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { personCourse } from 'src/app/services/personCourse';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.page.html',
  styleUrls: ['./member-list.page.scss'],
})
export class MemberListPage implements OnInit{
  // public role: any;
  public text: any;
  private person: any;
  public totalNumber: any;
  public httpOptions: any;
  private selectCourse: any;

  public member: Array<personCourse>;

  constructor(public localService: LocalStorageService,
              public nav: NavController,
              private router: Router,
              public http: HttpClient) { }

  ngOnInit() {

    this.selectCourse = this.localService.getItem('selectCourse');

    this.httpOptions = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json', 
        'Accept': 'application/json', 
        'token': this.localService.getItem('token')})
    };
    this.http.post('http://175.24.88.62:8080/pcs/personCourse/selectPersonBycId.do',{cId:this.selectCourse},this.httpOptions)
      .subscribe(data =>{
        // console.log(data);
        this.member = new Array<personCourse>();
        this.member = JSON.parse(JSON.stringify(data));  
        this.totalNumber = this.member.length;
        console.log(this.member);
      },function(error){console.log(error);});

    this.person = this.localService.getItem('person');
    if (this.person.isTeacher == 1) 
    {
      this.text = '发起签到';
    } 
    else 
    {
      this.text = '参与签到';
    }
  }

  gotosign() {
    
    if (this.person.isTeacher === 1) 
    {
      this.nav.navigateForward('\sign-in');
    } 
    else 
    {
      this.nav.navigateForward('\stu-sign-in');
    }
  }

  clickedStar() {
    this.router.navigateByUrl('/unopen');
  }
}
