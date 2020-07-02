import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Course } from 'src/app/services/Course';
import { resolve } from 'url';
import { Router } from '@angular/router';
import { signTable } from 'src/app/services/signTable';

declare var BMap;
@Component({
  selector: 'app-stu-sign-in',
  templateUrl: './stu-sign-in.page.html',
  styleUrls: ['./stu-sign-in.page.scss'],
})



export class StuSignInPage implements OnInit {

  public longitude: any;
  public latitude: any;
  public httpOptions: any;
  public person: any;
  public selectCourse: any;
  public course: Course;
  private cNumber: any;
  private cName: any;
  private signDate: any;
  private position = '福州大学';
  private response: any;

  public signRecord: Array<signTable>;
  public signData: Array<signTable>; 

  public dateArray = new Array<string>();

  constructor(public alertCtrl: AlertController, 
              public navCtrl: NavController, 
              public toastCtrl: ToastController, 
              public localStorage: LocalStorageService,
              public http: HttpClient,
              public router: Router) { }

  ngOnInit() {
    this.person = this.localStorage.getItem('person');
    this.selectCourse = this.localStorage.getItem('selectCourse');
    this.httpOptions = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json', 
        'Accept': 'application/json', 
        'token': this.localStorage.getItem('token')})
    };
    this.http.post('http://175.24.88.62:8080/pcs/course/selectByPrimaryKey.do', {cId: this.selectCourse}, this.httpOptions)
      .subscribe(data =>{
        this.course = JSON.parse(JSON.stringify(data));  
        this.cNumber = this.course.cNumber;
        this.cName = this.course.cName;
      },function(error){console.log(error);});

      this.http.get('http://175.24.88.62:8080/pcs/signIn/findAll.do', this.httpOptions)
      .subscribe(data =>{
        this.signData = new Array<signTable>();
        this.signData = JSON.parse(JSON.stringify(data));  
        this.signRecord = new Array<signTable>();
        for(var i=0; i<this.signData.length;i++)
        {
          if(this.signData[i].peNumber==this.person.peNumber && this.signData[i].cNumber==this.cNumber)
          {
            this.signRecord.push(this.signData[i]);
          }
        }
      },function(error){console.log(error);});
  }

  stuSignIn() {

    if(this.localStorage.getItem('starSign')==1)
    {

      var this_ = this;
      const geolocation = new BMap.Geolocation();
      geolocation.getCurrentPosition(function(r) {
        const mk = new BMap.Marker(r.point);
        alert('您的位置：' + r.point.lng + ',' + r.point.lat);
        this_.longitude = r.point.lng;
        this_.latitude = r.point.lat;
        console.log(this_.longitude, this_.latitude);
      }, { enableHighAccuracy: true });
      // this.signInAlert();
      console.log(this_.longitude, this_.latitude);
      // this.localStorage.set('longitude', this.longitude);
      // this.localStorage.set('latitude', this.latitude);
      // console.log(this.longitude, this.latitude);

      this.formatDate();
      console.log(this.signDate);

      this.http.post('http://175.24.88.62:8080/pcs/signIn/insert.do',
        {cNumber: this.cNumber, cName: this.cName, peNumber: this.person.peNumber, 
          peName: this.person.peName, state: 1, date: this.signDate, position: this.position},this.httpOptions)
          .subscribe(response=>{
            console.log(response);
            this.response=response;
            if(this.response==1)
            {
              alert('签到成功!');
              this.router.navigateByUrl('/class-tabs');
            }
            else
            {
              alert('签到失败!')
            }
          },function(error){console.log(error);})
    }
    else
    {
      alert('签到尚未开始!');
    }
  }

  formatDate(){
    const Dates = new Date();
    const Year : number = Dates.getFullYear(); 
    const Months : any = ( Dates.getMonth() + 1 ) < 10  ?  '0' + (Dates.getMonth() + 1) : ( Dates.getMonth() + 1); 
    const Day : any = Dates.getDate() < 10 ? '0' + Dates.getDate() : Dates.getDate();
    const Hour : any = Dates.getHours() < 10 ? '0' + Dates.getHours() : Dates.getHours(); 
    const Minute : any = Dates.getMinutes() < 10 ? '0' + Dates.getMinutes() : Dates.getMinutes();
    const Second : any = Dates.getSeconds() < 10 ? '0' + Dates.getSeconds() : Dates.getSeconds();
    this.signDate = Year + '-' + Months + '-' + Day + ' ' + Hour + ':' + Minute + ':' +Second;
  }

  // getDistance() {
  // }
}
