import { NavController } from '@ionic/angular';
import { Component, OnInit, OnChanges } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.page.html',
  styleUrls: ['./member-list.page.scss'],
})
export class MemberListPage implements OnInit{
  public role: any;
  public text: any;
  constructor(public localService: LocalStorageService,
              public nav: NavController,
              private router: Router,) { }

  ngOnInit() {
    this.role = this.localService.getItem('user').role;
    if (this.role === 'teacher') {
      this.text = '发起签到';
    } else {
      this.text = '参与签到';
    }
  }

  gotosign() {
    if (this.role === 'teacher') {
      this.nav.navigateForward('\sign-in');
    } else {
      this.nav.navigateForward('\stu-sign-in');
    }
  }

  clickedStar() {
    this.router.navigateByUrl('/unopen');
  }
}
