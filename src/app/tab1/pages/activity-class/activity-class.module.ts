import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActivityClassPageRoutingModule } from './activity-class-routing.module';

import { ActivityClassPage } from './activity-class.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivityClassPageRoutingModule
  ],
  declarations: [ActivityClassPage]
})
export class ActivityClassPageModule {}
