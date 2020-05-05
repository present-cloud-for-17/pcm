import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StuGestureLockPageRoutingModule } from './stu-gesture-lock-routing.module';

import { StuGestureLockPage } from './stu-gesture-lock.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StuGestureLockPageRoutingModule
  ],
  declarations: [StuGestureLockPage]
})
export class StuGestureLockPageModule {}
