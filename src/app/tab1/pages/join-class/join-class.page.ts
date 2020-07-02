import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Router } from '@angular/router';
import { Course } from 'src/app/services/Course';

@Component({
  selector: 'app-join-class',
  templateUrl: './join-class.page.html',
  styleUrls: ['./join-class.page.scss'],
})
export class JoinClassPage implements OnInit {
  
  public slideIndex: any = 0;

  private cId: any;
  private cNumber: any;
  private cName: any;
  private description: any;
  private term: any;
  private date: any;
  private credit: any;

  // private dailyWeight: any;
  // private finalWeight: any;

  // private course : Course;
  private courses: Array<Course>;


  private httpOptions: any;
  
  private person: any;
  // private peId: any;
  private isTeacher: any;
  private response: any;


  @ViewChild('classSlides', { static: true }) classSlides: IonSlides;
  constructor(private qrScanner: QRScanner, public http:HttpClient, public localStorage:LocalStorageService, public router: Router) { }

  ngOnInit() {
    // this.course= null;
    this.classSlides.lockSwipes(true);
    this.person = this.localStorage.getItem('person');
    this.isTeacher = this.person.isTeacher;
    this.httpOptions = {
      headers: new HttpHeaders({ 
        'Content-Type': 'application/json', 
        'Accept': 'application/json', 
        'token': this.localStorage.getItem('token')})
    };
  }

  onNext() {

    this.http.get('http://175.24.88.62:8080/pcs/course/findAll.do', this.httpOptions)
    .subscribe(data =>{
      this.courses = new Array<Course>();
      this.courses = JSON.parse(JSON.stringify(data));   
      console.log(this.courses);
      for(var i=0; i<this.courses.length; i++){
        if(this.courses[i].cNumber==this.cNumber){
          this.cId = this.courses[i].cId;
          this.cName = this.courses[i].cName;
          this.description = this.courses[i].description;
          this.term = this.courses[i].term;
          this.date = this.courses[i].date;
          this.credit = this.courses[i].credit;
          break;
        }
      }
      // console.log(this.course);
    },function(error){console.log(error);});

    this.classSlides.lockSwipes(false);
    this.classSlides.slideNext();
    this.slideIndex++;
    this.classSlides.lockSwipes(true);
  }

  joinClass(){
    if(this.isTeacher==0){
      this.http.post('http://175.24.88.62:8080/pcs/personCourse/insert.do',
        {peId: this.person.peId, cId: this.cId, value: 0, status: 1, 
          cName: this.cName, term: this.term, peNumber: this.person.peNumber, peName: this.person.peName}, this.httpOptions)
          .subscribe(response =>{
            this.response=response;
            console.log(this.response);
            if(this.response==1){
              alert('加入成功!');
            }
            else{
              alert('加入失败!');
            }
          }, function(error){console.log(error);});
    }
    if(this.isTeacher==1){
      alert('教师无法加入课程!');
      this.router.navigateByUrl('/home');
    }
  }
  // scan() {
  //   // Optionally request the permission early
  //   this.qrScanner.prepare()
  //     .then((status: QRScannerStatus) => {
  //       if (status.authorized) {
  //         // camera permission was granted
  //         // start scanning
  //         let scanSub = this.qrScanner.scan().subscribe((text: string) => {
  //           console.log('Scanned something', text);
  //           this.qrScanner.hide(); // hide camera preview
  //           scanSub.unsubscribe(); // stop scanning
  //         });

  //       } else if (status.denied) {
  //         // camera permission was permanently denied
  //         // you must use QRScanner.openSettings() method to guide the user to the settings page
  //         // then they can grant the permission from there
  //       } else {
  //         // permission was denied, but not permanently. You can ask for permission again at a later time.
  //       }
  //     })
  //     .catch((e: any) => console.log('Error is', e));
  // }
}
