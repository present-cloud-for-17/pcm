import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToFriendPage } from './to-friend.page';

const routes: Routes = [
  {
    path: '',
    component: ToFriendPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToFriendPageRoutingModule {}
