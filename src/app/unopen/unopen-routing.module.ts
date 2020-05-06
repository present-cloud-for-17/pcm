import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnopenPage } from './unopen.page';

const routes: Routes = [
  {
    path: '',
    component: UnopenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnopenPageRoutingModule {}
