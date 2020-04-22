import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Component, OnInit, ViewChild} from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { AuthenticationCodeService } from '../services/authentication-code.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

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
  @ViewChild('registerSlides', {static: true}) registerSlides: IonSlides;
  intervalFun: any;
  constructor(public localStorage: LocalStorageService,
              public authenticationCodeService: AuthenticationCodeService) { }
  ngOnInit() {
    this.registerSlides.lockSwipes(true);
  }

  onNext() {
    this.registerSlides.lockSwipes(false);
    this.registerSlides.slideNext();
    this.slideIndex++;
    this.registerSlides.lockSwipes(true);
  }

  sendVerifyCode() {
    this.verifyCode.code = this.authenticationCodeService.createCode(this.verifyCode.length);
    this.verifyCode.disable = true;
    this.intervalFun = setInterval(() => {
      this.countDown();
    }, 1000);
    this.onNext();
  }

  resend() {
    this.verifyCode.code = this.authenticationCodeService.createCode(this.verifyCode.length);
    this.verifyCode.disable = true;
    this.intervalFun = setInterval(() => {
      this.countDown();
    }, 1000);
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

  checkRole(e) {
    this.user.role = e.detail.value;
  }

  saveUser() {
    this.localStorage.set('user', this.user);
  }
}
