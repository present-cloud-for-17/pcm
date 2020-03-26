import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public segment = 1;
  public slideIndex: any = 0;

  constructor() { }

  ngOnInit() {
  }


  clickvcd() {
    this.segment = 1;
  }
  clickpwd() {
    this.segment = 3;
  }
  sendVerifyCode() {
    this.segment = 2;
  }
}
