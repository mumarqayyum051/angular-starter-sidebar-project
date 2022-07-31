import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { AuthGuard } from './core/services/auth-guard.service';
import { NoAuthGuard } from './core/services/no-auth-gaurd.service';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./core/auth/auth.module').then((m) => m.AuthModule),
    canActivate: [NoAuthGuard],
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],

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
