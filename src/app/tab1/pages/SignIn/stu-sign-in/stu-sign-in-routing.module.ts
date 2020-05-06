import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StuSignInPage } from './stu-sign-in.page';

const routes: Routes = [
  {
    path: '',
    component: StuSignInPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StuSignInPageRoutingModule {}
