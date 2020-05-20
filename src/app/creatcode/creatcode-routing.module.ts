import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatcodePage } from './creatcode.page';

const routes: Routes = [
  {
    path: '',
    component: CreatcodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatcodePageRoutingModule {}
