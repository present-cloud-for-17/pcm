import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {
  isOldPassword = true;
  oldpassword: string;
  newPassword: string;
  checkPassword: string;

  constructor(
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private router: Router,
    private localService: LocalStorageService) { }

  ngOnInit() {
  }

  async onSave() {
    const oldPass = this.localService.getItem('user').passport;
    this.isOldPassword = oldPass == this.oldpassword ? true : false;
    if (this.newPassword == this.checkPassword && this.isOldPassword) {
      const tmp = this.localService.get('user', '');
      tmp.passport = this.newPassword;
      this.localService.set('user', tmp);
      console.log('修改成功');
      this.router.navigateByUrl('/setting');
      const toast = await this.toastCtrl.create({
        message: '修改成功',
        duration: 2000
      });
      await toast.present();
    }
  }
}
