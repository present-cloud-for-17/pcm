import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {
  private version: any = '';
  constructor(
    private localStorageService: LocalStorageService,
    private navCtrl: NavController,
    private router: Router) { }

  ngOnInit() {
  }

  onLogout() {
    const config = this.localStorageService.get('App', '');
    config.hasRun = false;
    this.localStorageService.set('App', config);
    this.router.navigateByUrl('/login');
  }
}
