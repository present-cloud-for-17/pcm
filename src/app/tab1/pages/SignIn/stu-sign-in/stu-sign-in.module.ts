import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StuSignInPageRoutingModule } from './stu-sign-in-routing.module';

import { StuSignInPage } from './stu-sign-in.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StuSignInPageRoutingModule
  ],
  declarations: [StuSignInPage]
})
export class StuSignInPageModule {}
