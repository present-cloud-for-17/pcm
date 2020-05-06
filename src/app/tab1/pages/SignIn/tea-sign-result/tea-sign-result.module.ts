import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeaSignResultPageRoutingModule } from './tea-sign-result-routing.module';

import { TeaSignResultPage } from './tea-sign-result.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeaSignResultPageRoutingModule
  ],
  declarations: [TeaSignResultPage]
})
export class TeaSignResultPageModule {}
