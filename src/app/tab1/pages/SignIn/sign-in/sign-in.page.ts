import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
declare var BMap;
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  public longitude: any;
  public latitude: any;
  constructor() { }
  ngOnInit() {
  }

  getLocation() {
    const geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function(r) {
      const mk = new BMap.Marker(r.point);
      alert('您的位置：' + r.point.lng + ',' + r.point.lat);
      this.longitude = r.point.lng;
      this.latitude = r.point.lat;
      console.log(this.longitude);
    }, { enableHighAccuracy: true });
  }

}
