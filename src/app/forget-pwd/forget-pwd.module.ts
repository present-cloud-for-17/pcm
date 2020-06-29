import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgetPwdPageRoutingModule } from './forget-pwd-routing.module';

import { ForgetPwdPage } from './forget-pwd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgetPwdPageRoutingModule
  ],
  declarations: [ForgetPwdPage]
})
export class ForgetPwdPageModule {}
