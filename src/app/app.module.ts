import { ClassTabsPageModule } from './tab1/pages/class-tabs/class-tabs.module';
import { PopoverComponent } from './tab1/component/popover/popover.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsPageModule } from './tabs/tabs.module';
import { IonicStorageModule} from '@ionic/storage';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { Geolocation } from '@ionic-native/geolocation/ngx';
@NgModule({
  declarations: [AppComponent, PopoverComponent],
  entryComponents: [PopoverComponent],
  imports: [BrowserModule,
            IonicModule.forRoot(),
            AppRoutingModule,
            TabsPageModule,
            ClassTabsPageModule,
            NgxQRCodeModule,
            IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    QRScanner,
    Geolocation ,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
