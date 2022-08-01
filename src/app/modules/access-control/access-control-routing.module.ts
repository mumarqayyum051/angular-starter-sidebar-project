import { PermissionAuthGuard } from 'src/app/core/services/permission-auth-guard.service';
import { AccessControlComponent } from './access-control.component';

export const Routes = [
  {
    path: '',
    canActivate: [PermissionAuthGuard],
    component: AccessControlComponent,
  },
];
