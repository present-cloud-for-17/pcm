import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-stu-sign-in',
  templateUrl: './stu-sign-in.page.html',
  styleUrls: ['./stu-sign-in.page.scss'],
})
export class StuSignInPage implements OnInit {

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public toastCtrl: ToastController) { }

  ngOnInit() {
  }
  signInAlert(){
    alert("签到成功");
  }
}
