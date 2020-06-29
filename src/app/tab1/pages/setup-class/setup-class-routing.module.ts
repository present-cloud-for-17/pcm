import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetupClassPage } from './setup-class.page';

const routes: Routes = [
  {
    path: '',
    component: SetupClassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetupClassPageRoutingModule {}
