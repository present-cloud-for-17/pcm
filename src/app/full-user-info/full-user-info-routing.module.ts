import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullUserInfoPage } from './full-user-info.page';

const routes: Routes = [
  {
    path: '',
    component: FullUserInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FullUserInfoPageRoutingModule {}
