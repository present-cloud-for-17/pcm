import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationCodeService } from '../services/authentication-code.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public segment = 1;
  public slideIndex: any = 0;
  private phone = '';
  private password = '';
  private verifyCode: any = {
    verifyCodeTips: '发送验证码',
    code : '',
    confirmCode: '',
    length: 4,
    time: 60,
    disable: false,
    fail: false,
  };
  intervalFun: any;

  constructor(public authenticationCodeService: AuthenticationCodeService,
              private router: Router,
              public localService: LocalStorageService) { }

  ngOnInit() {
  }
  sendVerifyCode() {
    this.verifyCode.code = this.authenticationCodeService.createCode(this.verifyCode.length);
    this.verifyCode.disable = true;
    this.intervalFun = setInterval(() => {
      this.countDown();
    }, 1000);
    this.segment = 2;
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
      this.router.navigateByUrl('/home');
    }
  }

  check() {
    if (this.phone == this.localService.getItem('user').phone && this.password == this.localService.getItem('user').passport) {
      this.router.navigateByUrl('/home');
    }
  }

  clickvcd() {
    this.segment = 1;
  }
  clickpwd() {
    this.segment = 3;
  }
}
