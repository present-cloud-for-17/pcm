import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnopenPageRoutingModule } from './unopen-routing.module';

import { UnopenPage } from './unopen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnopenPageRoutingModule
  ],
  declarations: [UnopenPage]
})
export class UnopenPageModule {}
