
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

declare var BMap;

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  constructor(public localStorage: LocalStorageService,
              public nav: NavController) { }
  ngOnInit() {
  }


  // private starSign: any;

  async getLocation() {
  
    this.localStorage.set('starSign', 1);

    let longitude: any ;
    let latitude: any;
    const geolocation = new BMap.Geolocation();
    var this_ = this;
    await geolocation.getCurrentPosition(function(resp) {
      const mk = new BMap.Marker(resp.point);
      alert('您的位置：' + resp.point.lng + ',' + resp.point.lat);
      longitude = resp.point.lng;
      latitude = resp.point.lat;
      console.log(longitude, latitude);
      // this_.localStorage.set
      // LocalStorageService.set('longitude', resp.point.lng);
      this_.localStorage.set('teaLongitude', resp.point.lng);
      this_.localStorage.set('teaLatitude', resp.point.lat);
      this_.nav.navigateForward('\start');
      return longitude;
    }, { enableHighAccuracy: true });

    // var that = this;
    // setTimeout(function(){
    //   console.log(longitude, latitude);
    //   that.localStorage.set('longitude', longitude);
    //   that.localStorage.set('latitude', latitude);
    //   that.nav.navigateForward('\start');
    // },2000);

  }

}
