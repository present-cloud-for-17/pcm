import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassTabsPage } from './class-tabs.page';

const routes: Routes = [
  {
    path: 'ClassTabs',
    component: ClassTabsPage,
    children: [
      {
        path: 'activity',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../activity-class/activity-class.module').then(m => m.ActivityClassPageModule)
          }
        ]
      },
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
        path: 'resource',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../resource-class/resource-class.module').then(m => m.ResourceClassPageModule)
          }
        ]
      },
      {
        path: 'message',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../message-list/message-list.module').then(m => m.MessageListPageModule)
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
        redirectTo: '/ClassTabs/activity',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/ClassTabs/activity',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClassTabsPageRoutingModule {}
