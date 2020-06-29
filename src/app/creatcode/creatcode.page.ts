import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creatcode',
  templateUrl: './creatcode.page.html',
  styleUrls: ['./creatcode.page.scss'],
})
export class CreatcodePage implements OnInit {

  title = 'app';
  elementType = 'url';
  value = '';

  ngOnInit() {
    this.createCode();
  }
  createCode() {
      const code = '';
      for (let i = 0; i < 6; i++) {
        const code = Math.floor(Math.random() * 10);
        this.value += code.toString();
      }
      console.log(this.value);
      return this.value;
  }
}
