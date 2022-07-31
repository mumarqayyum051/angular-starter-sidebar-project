import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'feed',
        loadChildren: () =>
          import('./modules/feed/feed.module').then((m) => m.FeedModule),
      },
      {
        path: 'access-control',
        loadChildren: () =>
          import('./modules/access-control/access-control.module').then(
            (m) => m.AccessControlModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
