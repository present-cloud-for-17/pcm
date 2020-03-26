import { Component, OnInit, ViewChild} from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { UUID } from 'angular2-uuid';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  // private accessKeyId: string = 'LTAI4FnqEaWxpbTSZFhyoCqs';
  // private accessSecret: string = 'UpbsdWlZvfDlauXlnTe46PoHgyg8j1';
  // public date = new Date().toTimeString();
  // uuid = UUID.UUID();
  // private paras: any = {
  //   SignatureMethod: 'HMAC-SHA1',
  //   SignatureNonce: this.uuid,
  //   AccessKeyId: this.accessKeyId,
  //   SignatureVersion: '1.0',
  //   Timestamp: this.date,
  //   Format: 'XML',
  // }
  // msgApi: any = 'https://dysmsapi.aliyuncs.com/?Action=SendSms&<公共请求参数>';
  public slideIndex: any = 0;
  private code: any = '';
  public user: any = {
    phone: '',
    passport: '',
  };
  @ViewChild('registerSlides', {static: true}) registerSlides: IonSlides;
  constructor() { }
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
    this.onNext();
  }

  createCode(count: number): string {
    for (let i = 0; i < count; i++) {
      const num = Math.floor(Math.random() * 10);
      this.code += num.toString();
    }
    return this.code;
  }
}
