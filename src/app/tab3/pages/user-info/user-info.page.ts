import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Router } from '@angular/router';
import { isNull } from 'util';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.page.html',
  styleUrls: ['./user-info.page.scss'],
})
export class UserInfoPage implements OnInit {
  private userInfo: any = {
    id: '未设置',
    name: '未设置',
    nickname: '未设置',
    birthday: '未设置',
    sex: '未设置',
    school: '未设置',
    institute: '未设置',
    sno: '未设置'
  }
  constructor(private localStorage: LocalStorageService,
              private router: Router) { }

  ngOnInit() {
    if (isNull(this.localStorage.getItem('UserInfo'))) {

    } else {
      this.userInfo = this.localStorage.getItem('UserInfo');
    }

  }

  checkSex(e) {
    this.userInfo.sex = e.detail.value;
  }

  saveUserInfo() {
    this.localStorage.set('UserInfo', this.userInfo);
    this.router.navigateByUrl('/home');
  }
}
