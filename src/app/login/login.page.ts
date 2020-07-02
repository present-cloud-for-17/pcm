import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationCodeService } from '../services/authentication-code.service';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // public segment = 1;
  // public slideIndex: any = 0;
  // private phone = '';
  // private password = '';
  // private verifyCode: any = {
  //   verifyCodeTips: '发送验证码',
  //   code : '',
  //   confirmCode: '',
  //   length: 4,
  //   time: 60,
  //   disable: false,
  //   fail: false,
  // };
  // intervalFun: any;

  // private loginType : number;
  private loginToken = '';
  private passwordToken = '';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  public response : any;

  // public login: any = {
  //   loginType: '',
  //   loginToken: '',
  //   passwordToken: '',
  // };

  constructor(public authenticationCodeService: AuthenticationCodeService,
              private router: Router,
              public localService: LocalStorageService,
              public http: HttpClient) { }

  ngOnInit() {
  }
  // sendVerifyCode() {
  //   this.verifyCode.code = this.authenticationCodeService.createCode(this.verifyCode.length);
  //   this.verifyCode.disable = true;
  //   this.intervalFun = setInterval(() => {
  //     this.countDown();
  //   }, 1000);
  //   this.segment = 2;
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
  //     this.router.navigateByUrl('/home');
  //   }
  // }

  check() {
      // console.log(this.loginType);
      this.http.post('http://175.24.88.62:8080/pcs/userVerification/login.do', 
                        {loginToken: this.loginToken, passwordToken: this.passwordToken}, 
                            this.httpOptions)
                                .subscribe(response => 
                                {
                                  this.response=response;
                                  // console.log(this.response.data.user.uId);
                                  console.log(response); 
                                  if(this.response.code==200)
                                  {
                                    alert('登陆成功!');
                                    this.localService.set('uId', this.response.data.user.uId);
                                    this.localService.set('token', this.response.data.token);
                                    // this.localService.set('uvId', this.response.data.userVerification.uvId);
                                    if(this.response.data.person==null){
                                      this.router.navigateByUrl('/full-user-info');
                                    }
                                    if(this.response.data.person!=null){
                                      this.localService.set('person', this.response.data.person);
                                      // this.localService.set('peId', this.response.data.person.peId);
                                      // this.localService.set('isTeacher', this.response.data.person.isTeacher);
                                      this.router.navigateByUrl('/home');
                                    }                                   
                                  }
                                  else{
                                    alert('登陆失败!');
                                  }
                                  
                                }, 
                                function(error)
                                {
                                  console.log(error);
                                }); 
    // 1 202001 123456

    // if (this.phone == this.localService.getItem('user').phone && this.password == this.localService.getItem('user').passport) {
    //   this.router.navigateByUrl('/home');
    // }
}

  // clickvcd() {
  //   this.segment = 1;
  // }
  // clickpwd() {
  //   this.segment = 3;
  // }
  // checkRole(e) {
  //   this.loginType = parseInt(e.detail.value, 10);
  // }

}
