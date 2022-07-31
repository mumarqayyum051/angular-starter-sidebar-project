import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HttpTokenInterceptor } from './interceptors';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { AccessControlService } from './services/access-control.service';
import { ApiService } from './services/api.service';
import { AuthGuard } from './services/auth-guard.service';
import { JwtService } from './services/jwt.service';
import { NoAuthGuard } from './services/no-auth-gaurd.service';
import { UserService } from './services/user.service';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [SidebarComponent, LayoutComponent],
  exports: [LayoutComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    UserService,
    ApiService,
    JwtService,
    AuthGuard,
    NoAuthGuard,
    AccessControlService,
  ],
})
export class CoreModule {}
