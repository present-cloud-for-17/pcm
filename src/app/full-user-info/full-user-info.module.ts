import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FullUserInfoPageRoutingModule } from './full-user-info-routing.module';

import { FullUserInfoPage } from './full-user-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FullUserInfoPageRoutingModule
  ],
  declarations: [FullUserInfoPage]
})
export class FullUserInfoPageModule {}
