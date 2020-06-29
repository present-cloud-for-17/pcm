import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToFriendPageRoutingModule } from './to-friend-routing.module';

import { ToFriendPage } from './to-friend.page';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxQRCodeModule,
    ToFriendPageRoutingModule
  ],
  declarations: [ToFriendPage]
})
export class ToFriendPageModule {}
