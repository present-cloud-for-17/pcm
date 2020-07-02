import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-to-friend',
  templateUrl: './to-friend.page.html',
  styleUrls: ['./to-friend.page.scss'],
})
export class ToFriendPage implements OnInit {

  title = 'app';
  elementType = 'url';
  value = '';

  ngOnInit() {
    // this.createCode();
  }
  constructor(public localStorage: LocalStorageService,
  ) { }
  // createCode() {
  //     const code = '';
  //     this.value = this.localStorage.getItem("user").phone.toString();
  //     return this.value;
  // }

}
