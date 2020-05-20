import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassTabsPage } from './class-tabs.page';

const routes: Routes = [
  {
    path: 'ClassTabs',
    component: ClassTabsPage,
    children: [
      {
        path: 'member',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../member-list/member-list.module').then(m => m.MemberListPageModule)
          }
        ]
      },
      {
        path: 'detail',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../detail-class/detail-class.module').then(m => m.DetailClassPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/ClassTabs/member',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/ClassTabs/member',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClassTabsPageRoutingModule {}
