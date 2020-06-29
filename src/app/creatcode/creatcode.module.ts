import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { IonicModule } from '@ionic/angular';

import { CreatcodePageRoutingModule } from './creatcode-routing.module';

import { CreatcodePage } from './creatcode.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxQRCodeModule,
    CreatcodePageRoutingModule
  ],
  declarations: [CreatcodePage]
})
export class CreatcodePageModule {}
