import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  constructor(public router: Router, public localStorage: LocalStorageService) { }

  ngOnInit() {
  }

  giveUp(){
    this.localStorage.set('starSign',0);
    this.router.navigateByUrl('/sign-in');
  }


  endSign(){
    this.localStorage.set('starSign',0);
    this.router.navigateByUrl('/tea-sign-result');
  }

}
