import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Component, OnInit, ViewChild} from '@angular/core';
import { IonSlides, ToastController } from '@ionic/angular';
import { AuthenticationCodeService } from '../services/authentication-code.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-pwd',
  templateUrl: './forget-pwd.page.html',
  styleUrls: ['./forget-pwd.page.scss'],
})
export class ForgetPwdPage implements OnInit {
  public slideIndex: any = 0;
  private verifyCode: any = {
    verifyCodeTips: '发送验证码',
    code : '',
    confirmCode: '',
    length: 4,
    time: 60,
    disable: false,
    fail: false,
  };
  public user: any = {
    phone: '',
    passport: '',
    confirmPassword: '',
    role: '',
  };
  @ViewChild('resetSlides', {static: true}) resetSlides: IonSlides;
  intervalFun: any;
  constructor(public localStorage: LocalStorageService,
              public authenticationCodeService: AuthenticationCodeService,
              private toastCtrl: ToastController,
              public router: Router) { }
  ngOnInit() {
    this.resetSlides.lockSwipes(true);
  }

  onNext() {
    this.resetSlides.lockSwipes(false);
    this.resetSlides.slideNext();
    this.slideIndex++;
    this.resetSlides.lockSwipes(true);
  }

  sendVerifyCode() {
    this.verifyCode.code = this.authenticationCodeService.createCode(this.verifyCode.length);
    this.verifyCode.disable = true;
    this.intervalFun = setInterval(() => {this.countDown();}, 1000);
    // const tmp = this.localStorage.get('user', '');
    // if (tmp.phone == this.user.phone) {
    this.onNext();
    // } 
    // else {
      // const toast =  this.toastCtrl.create({
      //   message: '手机号码错误',
      //   duration: 2000,
      //   position: "top" 
      // });
      //  toast.present();
    // }
  }

  resend() {
    this.verifyCode.code = this.authenticationCodeService.createCode(this.verifyCode.length);
    this.verifyCode.disable = true;
    this.intervalFun = setInterval(() => {this.countDown();}, 1000);
  }

  countDown() {
    if (this.verifyCode.time === 0) {
      this.verifyCode.time = 60;
      this.verifyCode.verifyCodeTips = '重新发送';
      this.verifyCode.disable = false;
      clearInterval(this.intervalFun);
      return;
    } else {
      this.verifyCode.time--;
    }
    this.verifyCode.verifyCodeTips = this.verifyCode.time + 's';
  }

  checkVerifyCode() {
    if (this.verifyCode.confirmCode == this.verifyCode.code) {
      this.onNext();
    }
  }

  saveUser() {
    // const tmp = this.localStorage.get('user', '');
    // tmp.passport = this.user.passport;
    // console.log(this.user.passport);
    alert('接口待完善!');
    this.router.navigateByUrl('/login');
    // this.localStorage.set('user', tmp);
  }
}
