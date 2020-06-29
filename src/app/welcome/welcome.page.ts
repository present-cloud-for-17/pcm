import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WelcomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
