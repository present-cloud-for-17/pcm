import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Component, OnInit, ViewChild} from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { AuthenticationCodeService } from '../services/authentication-code.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  // public slideIndex: any = 0;
  // private verifyCode: any = {
  //   verifyCodeTips: '发送验证码',
  //   code : '',
  //   confirmCode: '',
  //   length: 4,
  //   time: 60,
  //   disable: false,
  //   fail: false,
  // };
  // public user: any = {
  //   phone: '',
  //   passport: '',
  //   confirmPassword: '',
  //   role: '',
  // };

  private userNumber = '';
  private userName = '';
  private userPhone = '';
  private userMail = '';
  private userDate = '';
  private response : any;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // @ViewChild('registerSlides', {static: true}) registerSlides: IonSlides;
  // intervalFun: any;
  constructor(public localStorage: LocalStorageService,
              public authenticationCodeService: AuthenticationCodeService,
              public http: HttpClient,
              public router: Router) { }
  ngOnInit() {
    // this.userDate = new Date();
    this.formatDate();
    // console.log(this.userDate);
    // this.registerSlides.lockSwipes(true);
  }

  formatDate(){
    const Dates = new Date();
    const Year : number = Dates.getFullYear(); 
    const Months : any = ( Dates.getMonth() + 1 ) < 10  ?  '0' + (Dates.getMonth() + 1) : ( Dates.getMonth() + 1); 
    const Day : any = Dates.getDate() < 10 ? '0' + Dates.getDate() : Dates.getDate();
    this.userDate = Year + '-' + Months + '-' + Day;
  }

  // onNext() {
  //   this.registerSlides.lockSwipes(false);
  //   this.registerSlides.slideNext();
  //   this.slideIndex++;
  //   this.registerSlides.lockSwipes(true);
  // }

  // sendVerifyCode() {
  //   this.verifyCode.code = this.authenticationCodeService.createCode(this.verifyCode.length);
  //   this.verifyCode.disable = true;
  //   this.intervalFun = setInterval(() => {
  //     this.countDown();
  //   }, 1000);
  //   this.onNext();
  // }

  // resend() {
  //   this.verifyCode.code = this.authenticationCodeService.createCode(this.verifyCode.length);
  //   this.verifyCode.disable = true;
  //   this.intervalFun = setInterval(() => {
  //     this.countDown();
  //   }, 1000);
  // }

  // countDown() {
  //   if (this.verifyCode.time === 0) {
  //     this.verifyCode.time = 60;
  //     this.verifyCode.verifyCodeTips = '重新发送';
  //     this.verifyCode.disable = false;
  //     clearInterval(this.intervalFun);
  //     return;
  //   } else {
  //     this.verifyCode.time--;
  //   }
  //   this.verifyCode.verifyCodeTips = this.verifyCode.time + 's';
  // }

  // checkVerifyCode() {
  //   if (this.verifyCode.confirmCode == this.verifyCode.code) {
  //     this.onNext();
  //   }
  // }

  // checkRole(e) {
  //   this.user.role = e.detail.value;
  // }

  saveUser() {
    this.http.post('http://175.24.88.62:8080/pcs/user/register.do', 
    {uNumber: this.userNumber, uName: this.userName, phone: this.userPhone, emaile: this.userMail, createDate: this.userDate, status: 1}, this.httpOptions)
      .subscribe(response => {
        this.response=response;
        console.log(this.response);
                    // console.log(response); 
        if(this.response==1){
          alert('注册成功!');
          this.router.navigateByUrl('/login');
        }
        else{
          alert('注册失败!');
        }
      }, function(error){console.log(error);});
    // this.localStorage.set('user', this.user);
  }

}
