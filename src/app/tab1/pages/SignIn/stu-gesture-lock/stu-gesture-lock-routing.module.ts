import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StuGestureLockPage } from './stu-gesture-lock.page';

const routes: Routes = [
  {
    path: '',
    component: StuGestureLockPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StuGestureLockPageRoutingModule {}
