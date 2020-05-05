import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeaSignResultPage } from './tea-sign-result.page';

const routes: Routes = [
  {
    path: '',
    component: TeaSignResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeaSignResultPageRoutingModule {}
