import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToFriendPageRoutingModule } from './to-friend-routing.module';

import { ToFriendPage } from './to-friend.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToFriendPageRoutingModule
  ],
  declarations: [ToFriendPage]
})
export class ToFriendPageModule {}
