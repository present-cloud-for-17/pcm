import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResourceClassPageRoutingModule } from './resource-class-routing.module';

import { ResourceClassPage } from './resource-class.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResourceClassPageRoutingModule
  ],
  declarations: [ResourceClassPage]
})
export class ResourceClassPageModule {}
