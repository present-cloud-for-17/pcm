import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetupClassPageRoutingModule } from './setup-class-routing.module';

import { SetupClassPage } from './setup-class.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetupClassPageRoutingModule
  ],
  declarations: [SetupClassPage]
})
export class SetupClassPageModule {}
